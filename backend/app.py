from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from classifier import classify

app = FastAPI(title="DoomScroll AI API")

# CORS (only add once)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://www.instagram.com",
        "http://127.0.0.1:*",
        "http://localhost:*",
        "*"
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ReelRequest(BaseModel):
    shortcode: str


@app.get("/")
def home():
    return {
        "status": "running",
        "message": "DoomScroll AI Backend"
    }


@app.get("/health")
def health():
    return {
        "status": "ok"
    }


@app.post("/classify")
def classify_post(post: ReelRequest):
    print(f"Received shortcode: {post.shortcode}")

    # TODO:
    # Fetch reel metadata here using the shortcode
    # Example:
    #
    # caption = ...
    # hashtags = ...
    # image = ...
    #
    # For now we'll just send the shortcode as placeholder text.

    result = classify(
        caption=post.shortcode,
        hashtags=[],
        image=""
    )

    return {
        "shortcode": post.shortcode,
        "allowed": result.get("allowed", True),
        "reason": result.get("reason", "")
    }