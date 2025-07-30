from langchain_core.prompts import PromptTemplate, load_prompt

template = load_prompt("prompt.json") # this prompt is saved using template.save() in a different file

prompt = PromptTemplate.from_template(template)

# or use chains
# chain = prompt | llm
# chain.invoke("What is the capital of France?")
# watch prompt video by campusX or langchain docs to understand this