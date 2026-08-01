from pydantic import BaseModel
from typing import List


class PostRequest(BaseModel):
    caption: str
    hashtags: List[str]
    image: str = ""


class ClassificationResult(BaseModel):
    allowed: bool
    topics: List[str]
    confidence: float
