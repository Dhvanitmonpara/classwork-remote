from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint
from dotenv import load_dotenv

# Note: it will pick API key by itself like clerk does. just name it exactly HUGGINGFACEHUB_API_TOKEN

load_dotenv()

llm = HuggingFaceEndpoint(
  repo_id="TinyLlama/TinyLlama-1.1B-chat-v1.0",
  task="text-generation",
)

model = ChatHuggingFace(llm=llm)

result = model.invoke("What is the capital of France?")

print(result)
