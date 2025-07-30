from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
from typing import TypedDict, Annotated, Optional, Literal, List
from pydantic import BaseModel, Field

load_dotenv()

model = ChatOpenAI(model="gpt-4")

# class Review(TypedDict):

#   key_themes: Annotated[list[str], "Write all the key themes discussed in the review"]
#   summary: Annotated[str, "Write a summary of the review"]
#   rating: Annotated[float, "Rate the review on a scale of 1 to 5"]
#   sentiment: Annotated[Literal["positive", "negative", "neutral"], "Write the sentiment of the review"]
#   pros: Annotated[Optional[list[str]], "Write down all pros inside a list"]
#   cons: Annotated[Optional[list[str]], "Write down all cons inside a list"]
#   name: Annotated[Optional[str], "Write the name of the reviewer"]

class Review(BaseModel):

  key_themes: list[str] = Field(description="Write all the key themes discussed in the review")
  summary: str = Field(description="Write a summary of the review")
  rating: float = Field(
        ge=1,
        le=5,
        description="Rate the review on a scale of 1 to 5",
    )
  sentiment: Literal["positive", "negative", "neutral"] = Field(
        description="Write the sentiment of the review",
  )
  pros: Optional[List[str]] = Field(
        default=None,
        description="Write down all pros inside a list",
  )
  cons: Optional[List[str]] = Field(
      default=None,
      description="Write down all cons inside a list",
  )
  name: Optional[str] = Field(
      default=None,
      description="Write the name of the reviewer",
  )

structured_model = model.with_structured_output(Review)

result = model.invoke("""
I've been using the Dell XPS 13 for a few weeks now for my [work/study/gaming], and I'm genuinely impressed!

Design & Display: Right out of the box, it feels premium. The [material, e.g., "aluminum build"] is sturdy, and it's surprisingly light. The [display type, e.g., "15.6-inch FHD+ / 14-inch QHD+ OLED"] screen is simply stunning – vibrant colors, deep blacks, and great for [movies/editing/browsing]. The [aspect ratio, e.g., "16:10"] is a big win for productivity.

Performance: My configuration with the [processor, e.g., "Intel Core i7-13700H"] and [GPU, e.g., "NVIDIA GeForce RTX 4060"] handles everything I throw at it with ease. From [heavy multitasking/video editing] to even some [casual gaming, e.g., "Fortnite"], it's been super smooth. Fans do kick in under load, but it's manageable.

Keyboard & Trackpad: Typing on this is a pleasure, with [e.g., "good key travel"] and a responsive feel. The [e.g., "glass trackpad"] is large, precise, and supports gestures flawlessly – a highlight!

Connectivity & Battery: Port selection is [e.g., "okay, with Thunderbolt 4"], but I do miss a full-size USB-A. Wi-Fi 6E is fast and reliable. Battery life averaged around [e.g., "6-7 hours"] for my typical use, which is decent but not all-day.

Audio & Webcam: Speakers are surprisingly good for a laptop, offering clear and loud audio. The webcam is [e.g., "720p/1080p"] and fine for calls, though nothing exceptional.

Overall: While it's a bit of an investment, the Dell XPS 13 is a powerhouse with a gorgeous display and premium feel. If you need a reliable machine for [specific use case, e.g., "creative work or everyday productivity"] and appreciate quality, it's definitely worth considering!

Pros: Great display, premium build, strong performance, excellent keyboard/trackpad.
Cons: Battery life could be longer under heavy use, limited USB-A ports.
""")

print(result)
# print(result["name"])
# print(result["cons"])
# print(result["key_themes"])
# print(result["ratings"])
print(result.name) # for pydantic
print(result.cons)
