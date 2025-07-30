from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv

# Note: it will pick API key by itself like clerk does. just name it exactly GOOGLE_API_KEY

load_dotenv()

model = ChatGoogleGenerativeAI(model="gemini-2.0-flash", temperature=0.5)

result = model.invoke("What is the capital of France?")

print(result)
