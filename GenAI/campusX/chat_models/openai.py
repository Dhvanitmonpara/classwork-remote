from langchain_openai import ChatOpenAI
from dotenv import load_dotenv

# Note: it will pick API key by itself like clerk does. just name it exactly OPENAI_API_KEY

load_dotenv()

model = ChatOpenAI(model="gpt-4", temperature=0.5)

result = model.invoke("What is the capital of France?")

print(result)
