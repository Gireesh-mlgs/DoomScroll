TOPICS = {

    "Programming": [
        "java", "python", "javascript", "typescript", "c++", "c#", "go",
        "rust", "php", "kotlin", "swift", "coding", "programming",
        "developer", "software engineer", "leetcode", "github",
        "codeforces", "hackerrank", "algorithm", "data structure",
        "frontend", "backend", "fullstack", "web development",
        "react", "angular", "vue", "node", "express",
        "django", "flask", "spring", "fastapi", "api",
        "docker", "kubernetes", "linux", "git", "sql"
    ],

    "AI": [
        "ai", "artificial intelligence", "chatgpt", "openai",
        "machine learning", "deep learning", "llm",
        "gemini", "claude", "copilot", "stable diffusion",
        "midjourney", "langchain", "huggingface",
        "transformers", "bert", "gpt", "neural network",
        "computer vision", "nlp", "prompt engineering"
    ],

    "Technology": [
        "technology", "tech", "apple", "iphone", "android",
        "windows", "macbook", "linux", "samsung",
        "gpu", "cpu", "intel", "amd", "nvidia",
        "laptop", "pc", "computer", "software",
        "hardware", "cloud", "aws", "azure", "google cloud"
    ],

    "Gaming": [
        "gaming", "gamer", "minecraft", "valorant",
        "pubg", "cs2", "counter strike", "fortnite",
        "call of duty", "warzone", "gta", "gta 6",
        "elden ring", "dota", "league of legends",
        "steam", "epic games", "xbox", "playstation",
        "nintendo", "fps", "battle royale"
    ],

    "Dank Meme": [
        "meme", "memes", "funny", "lol", "lmao",
        "shitpost", "brainrot", "sigma", "gigachad",
        "skibidi", "dark humor", "template", "reaction meme",
        "relatable", "dank", "viral meme"
    ],

    "Anime": [
        "anime", "manga", "naruto", "one piece",
        "bleach", "dragon ball", "attack on titan",
        "jujutsu kaisen", "gojo", "luffy", "zoro",
        "demon slayer", "chainsaw man", "solo leveling",
        "otaku", "waifu"
    ],

    "Movies": [
        "movie", "film", "cinema", "marvel",
        "dc", "hollywood", "bollywood", "netflix",
        "series", "actor", "actress", "trailer",
        "review", "scene"
    ],

    "Music": [
        "music", "song", "spotify", "album",
        "rap", "hip hop", "pop", "rock",
        "dj", "concert", "playlist", "lyrics",
        "singer"
    ],

    "Sports": [
        "football", "soccer", "cricket", "nba",
        "ipl", "fifa", "tennis", "badminton",
        "volleyball", "basketball", "formula 1",
        "f1", "wwe", "ufc", "olympics"
    ],

    "Finance": [
        "finance", "money", "stock", "stocks",
        "bitcoin", "crypto", "ethereum", "trading",
        "investing", "mutual fund", "nifty",
        "sensex", "nasdaq", "forex", "business",
        "startup", "economy"
    ],

    "Education": [
        "study", "education", "college", "school",
        "university", "exam", "notes", "assignment",
        "lecture", "tutorial", "course", "learning"
    ],

    "Travel": [
        "travel", "trip", "vacation", "tour",
        "mountains", "beach", "hotel", "flight",
        "backpacking", "road trip", "nature"
    ],

    "Fitness": [
        "fitness", "gym", "workout", "exercise",
        "bodybuilding", "protein", "cardio",
        "weight loss", "muscle", "strength"
    ],

    "Food": [
        "food", "recipe", "pizza", "burger",
        "coffee", "restaurant", "chef", "dessert",
        "chocolate", "street food", "cooking"
    ],

    "Cars": [
        "car", "bmw", "audi", "mercedes",
        "tesla", "mustang", "ferrari", "lamborghini",
        "supercar", "drift", "racing"
    ],

    "Photography": [
        "camera", "photography", "portrait",
        "cinematic", "editing", "lightroom",
        "photoshop", "videography", "drone"
    ]
}


def classify(caption, hashtags, image):

    text = (caption + " " + " ".join(hashtags)).lower()

    found_topics = []
    matched_keywords = []

    for topic, keywords in TOPICS.items():

        for keyword in keywords:

            if keyword in text:

                found_topics.append(topic)
                matched_keywords.append(keyword)
                break

    confidence = min(
        1.0,
        0.35 + (len(matched_keywords) * 0.15)
    )

    return {
        "allowed": len(found_topics) > 0,
        "topics": list(set(found_topics)),
        "matched_keywords": matched_keywords,
        "confidence": round(confidence, 2)
    }
