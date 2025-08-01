from langchain_mcp_adapters.client import MultiServerMCPClient
from langgraph.prebuilt import create_react_agent
from langchain_groq import ChatGroq
from dotenv import load_dotenv

import os
import asyncio

load_dotenv()
os.environ["GROQ_API_KEY"] = os.getenv("GROQ_API_KEY")
model = ChatGroq(model="qwen-qwq-32b")

async def main():
  client = MultiServerMCPClient({
    "math": {
      "command": "python",
      "args": ["mathserver.py"],
      "transport": "stdio"
    },
    "weather": {
      "url": "http://localhost:8000/mcp",
      "transport": "streamable-http"
    }
  })

  tools = await client.get_tools()
  print("heelo")
  agent = create_react_agent(model, tools)

  math_response = await agent.ainvoke({
    "messages": [
      {
        "role": "user",
        "content": "what's (3 + 5) x 12?"
      }
    ]
  })

  print(math_response["messages"][-1].content)

try:
    asyncio.run(main())
except Exception as e:
    print("💥 Error:", e)
