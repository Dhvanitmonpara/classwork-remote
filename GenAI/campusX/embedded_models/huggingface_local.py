from langchain_huggingface import HuggingFaceEmbeddings

# Use this for inference API
# from langchain_huggingface import HuggingFaceEndpointEmbeddings

embedding = HuggingFaceEmbeddings(model="sentence-transformers/all-MiniLM-L6-v2")

text="delhi is the capital of india"

vector = embedding.embed_query(text)
# vector = embedding.embed_documents(docs)

print(str(vector))