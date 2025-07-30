from langchain_openai import OpenAIEmbeddings
from sklearn.metrics.pairwise import cosine_similarity
from dotenv import load_dotenv

load_dotenv()

embedding = OpenAIEmbeddings(model="text-embedding-3-small", dimensions=32)

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