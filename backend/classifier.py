TOPICS = {
    "Programming": [
        "java",
        "python",
        "coding",
        "developer",
        "leetcode",
        "github",
        "programming"
    ],

    "AI": [
        "ai",
        "chatgpt",
        "machine learning",
        "openai",
        "llm"
    ],

    "Dank Meme": [
        "meme",
        "funny",
        "lol",
        "shitpost",
        "dark humor"
    ],

    "Gaming": [
        "gaming",
        "minecraft",
        "valorant",
        "cs2",
        "pubg"
    ],

    "Anime": [
        "anime",
        "naruto",
        "gojo",
        "one piece"
    ],

    "Finance": [
        "crypto",
        "bitcoin",
        "finance",
        "stock"
    ]
}


def classify(caption, hashtags, image):
    text = (caption + " " + " ".join(hashtags)).lower()

    found_topics = []

    for topic, keywords in TOPICS.items():
        for keyword in keywords:
            if keyword in text:
                found_topics.append(topic)
                break

    return {
        "allowed": len(found_topics) > 0,
        "topics": found_topics,
        "confidence": 0.95 if found_topics else 0.10
    }