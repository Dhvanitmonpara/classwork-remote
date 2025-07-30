from langchain_anthropic import ChatAnthropic
from dotenv import load_dotenv

# Note: it will pick API key by itself like clerk does. just name it exactly ANTHROPIC_API_KEYw

load_dotenv()

model = ChatAnthropic(model="claude-3-5-sonnet", temperature=0.5)

result = model.invoke("What is the capital of France?")

print(result)
