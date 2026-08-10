from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

from classifier import classify

app = FastAPI(
    title="DoomScroll AI API",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------------------------
# Request Model
# ------------------------------------

class ReelRequest(BaseModel):
    url: str = ""
    username: str = ""
    caption: str = ""
    hashtags: List[str] = []
    audio: str = ""
    likes: str = ""
    comments: str = ""
    image: str = ""
    timestamp: str = ""

# ------------------------------------
# Routes
# ------------------------------------

@app.get("/")
def home():
    return {
        "status": "running",
        "project": "DoomScroll AI",
        "version": "1.0.0"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/classify")
def classify_post(post: ReelRequest):

    print("\n==============================")
    print("🎥 NEW REEL")
    print("==============================")

    print("URL:", post.url)
    print("Username:", post.username)
    print("Caption:", post.caption)
    print("Hashtags:", post.hashtags)
    print("Audio:", post.audio)
    print("Likes:", post.likes)
    print("Comments:", post.comments)
    print("Image:", post.image)
    print("Timestamp:", post.timestamp)

    result = classify(
        caption=post.caption,
        hashtags=post.hashtags,
        image=post.image
    )

    return {
        "allowed": result.get("allowed", True),
        "topics": result.get("topics", []),
        "confidence": result.get("confidence", 0.0),

        "metadata": {
            "url": post.url,
            "username": post.username,
            "audio": post.audio,
            "likes": post.likes,
            "comments": post.comments,
            "timestamp": post.timestamp
        }
    }
