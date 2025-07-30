from langchain_openai import ChatOpenAI
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from dotenv import load_dotenv

load_dotenv()

model = ChatOpenAI()

# This will not work
# chat_template = ChatPromptTemplate([
#   SystemMessage(content="You are a helpful {domain} expert"), 
#   HumanMessage(content="Explain in simple terms, what is {topic}")
# ])

chat_template = ChatPromptTemplate([
  ('system', "You are a helpful {domain} expert"),
  MessagesPlaceholder(variable_name="chat_history"), # You can use message placeholder for history which you'll fetch from db or any other source and it will be in ChatPromptTemplate's argument syntax
  ('human', "Explain in simple terms, what is {topic}")
])

prompt = chat_template.invoke({
  'domain': "cricket",
  "topic": "Dusra",
  'chat_history': [] # Replace this with fetched chat history
})

chat_history = [
  SystemMessage(content="You are a helpful assistant."),
]

while True:
  user_input = input("You: ")
  chat_history.append(HumanMessage(content=user_input))
  if user_input == "exit":
    break

  result = model.invoke(chat_history)
  chat_history.append(AIMessage(content=result.content))
  print("AI: ", result.content)

print(chat_history)