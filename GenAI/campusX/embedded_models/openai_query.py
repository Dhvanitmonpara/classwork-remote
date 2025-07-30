from langchain_openai import OpenAIEmbeddings
from dotenv import load_dotenv

# Note: it will pick API key by itself like clerk does. just name it exactly OPENAI_API_KEY

load_dotenv()

embedding = OpenAIEmbeddings(model="text-embedding-3-small", dimensions=32)

result = embedding.embed_query("Delhi is the capital of India")

print(str(result))