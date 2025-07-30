from langchain_core.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_huggingface import HuggingFaceEmbeddings
from dotenv import load_dotenv
from youtube_transcript_api import YouTubeTranscriptApi
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_core.runnables import RunnableParallel, RunnablePassthrough, RunnableLambda
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

embeddingModel = HuggingFaceEmbeddings(model="sentence-transformers/all-MiniLM-L6-v2")
model = ChatGoogleGenerativeAI(model="gemini-2.0-flash", temperature=0.5)
splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
parser = StrOutputParser()

prompt = PromptTemplate(
  template="""
You are a helpful assistant.
Answer ONLY from provided transcript context.
If the context is insufficient, Just say I don't know.

{context}
Question: {question}
""",
input_variables=["context","question"]
)

def format_docs(retrieved_docs):
  return "\n\n".join([doc.page_content for doc in retrieved_docs])

def transcript_video(video_id):
  try:
    yt_transcript = YouTubeTranscriptApi()

    transcript_list = yt_transcript.fetch(video_id=video_id, languages=["en"])
    return " ".join(snippet.text for snippet in transcript_list.snippets)

  except Exception:
    print("Exception while transcribing video" + video_id)
    print(Exception)

def init_video(video_id):
  print("Transcribing video...")

  # video transcription using external API  
  transcript = transcript_video(video_id)
  print("Chunking transcript...")

  # text splitting
  chunks = splitter.create_documents([transcript])
  print("Initializing store...")

  # initializing vector store
  vector_store = FAISS.from_documents(chunks, embeddingModel)

  # returned retriever from vector store
  retriever = vector_store.as_retriever(search_type="similarity", search_kwargs={"k":4})

  print("Video processed successfully!")

  parallel_chain = RunnableParallel({
      'context': retriever | RunnableLambda(format_docs),
      'question': RunnablePassthrough()
    })
  main_chain = parallel_chain | prompt | model | parser
  return main_chain


def main():
  video_id = input("Enter video id: ")
  main_chain = init_video(video_id)

  while True:
    question = input("You: ")
    if question == "exit":
      break
    elif question == "reset":
      video_id = input("Enter video id: ")
      main_chain = init_video(video_id)

    answer = main_chain.invoke(question)
    print("AI: ", answer)

if __name__ == "__main__":
  main()