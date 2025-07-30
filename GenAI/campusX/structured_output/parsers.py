from langchain_core.output_parsers import StrOutputParser, JsonOutputParser, PydanticOutputParser
from langchain.output_parsers import StructuredOutputParser, ResponseSchema
from pydantic import BaseModel, Field
from langchain_core.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv

load_dotenv()

model = ChatGoogleGenerativeAI(model="gemini-2.0-flash")

### StrOutputParser
strParser = StrOutputParser() # This will parse the output as string (result.content), best for chaining

### JsonOutputParser
jsonParser = JsonOutputParser()

template = PromptTemplate(
  template="Give me 5 facts about {topic} \n {format_instructions}",
  input_variables=['topic'],
  partial_variables={'format_instructions': jsonParser.get_format_instructions()},
)

# prompt = template.format(topic="India")
# result = model.invoke(prompt)
# final_result = jsonParser.parse(result.content)

chain = template | model | strParser

chain.invoke({"topic": "India"})

### structured output parsers
schema = [
  ResponseSchema(name='fact_1', description='First fact'),
  ResponseSchema(name='fact_2', description='Second fact'),
  ResponseSchema(name='fact_3', description='Third fact'),
]

structuredOptParser = StructuredOutputParser.from_response_schemas(schemas=schema)

template = PromptTemplate(
  template="Give me 3 facts about {topic} \n {format_instructions}",
  input_variables=['topic'],
  partial_variables={'format_instructions': structuredOptParser.get_format_instructions()},
)

prompt = template.format(topic="India")
result = model.invoke(prompt)
final_result = structuredOptParser.parse(result.content)

### PydanticOutputParser

class Person(BaseModel):
  name: str = Field(description="Name of the person")
  age: int = Field(gt=18, lt=100, description="Age of the person")
  city: str = Field(description="Name of the city the person belongs in")

pydanticParse = PydanticOutputParser(pydantic_object=Person)

template = PromptTemplate(
  template='Generate the name, age and city of a fictional {place} person \n {format_instructions}',
  input_variables=['place'],
  partial_variables={'format_instructions': pydanticParse.get_format_instructions()}
)

chain = template | model | pydanticParse
result = chain.invoke({"place": "Indian"})
print(result)
