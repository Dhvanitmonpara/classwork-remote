from sklearn.metrics.pairwise import cosine_similarity
from dotenv import load_dotenv
from langchain_huggingface import HuggingFaceEmbeddings

load_dotenv()

model_name = "sentence-transformers/all-mpnet-base-v2"
model_kwargs = {'device': 'cpu'}
embedding = HuggingFaceEmbeddings(
    model_name=model_name,
    model_kwargs=model_kwargs,
)

documents = [
  "Delhi is the capital of India",
  "Mumbai is the capital of Maharashtra",
  "Paris is the capital of France",
]

query = input("Enter a query: ")

doc_embeddings = embedding.embed_documents(documents)
query_embeddings = embedding.embed_query(query)

scores = cosine_similarity([query], documents)[0]

# index, score = max(enumerate(scores), key=lambda x: x[1])
index, score = sorted(list(enumerate(scores)), key=lambda x: x[1])[-1]

print(query)
print(documents[index])
print("Similarity score: ", score)