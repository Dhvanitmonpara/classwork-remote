from langchain_openai import OpenAIEmbeddings
from dotenv import load_dotenv

# Note: it will pick API key by itself like clerk does. just name it exactly OPENAI_API_KEY

load_dotenv()

documents = ["Delhi is the capital of India", "Mumbai is the capital of Maharashtra", "Paris is the capital of France"]

embedding = OpenAIEmbeddings(model="text-embedding-3-small", dimensions=32)

result = embedding.embed_documents(documents)

print(str(result))