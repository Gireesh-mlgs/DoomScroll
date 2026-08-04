# 🧠 DoomScroll AI

> **Your AI-Powered Instagram Content Filter**

DoomScroll AI is a Chrome extension that intelligently filters Instagram Reels based on **your interests** instead of Instagram's recommendation algorithm.

Whether you want to watch only programming videos, AI content, memes, gaming clips, or educational reels, DoomScroll AI helps eliminate unwanted content and reduce endless doomscrolling.

---

## ✨ Features

- 🤖 AI-powered reel classification
- 🎯 Personalized content filtering
- 🚫 Automatically hide unwanted reels
- 🌫️ Blur mode instead of hiding
- ⚡ Fast FastAPI backend
- 🧠 Easily extendable AI pipeline
- 📊 User preference based recommendations
- 🔒 Runs locally on your machine
- 🌐 Chrome Extension (Manifest V3)

---

# 📸 Preview

Coming Soon...

---

# 🚀 Motivation

Instagram's recommendation algorithm is designed to maximize engagement.

DoomScroll AI is designed to maximize **your productivity.**

Instead of wasting hours watching random videos, users can choose exactly what they want to consume.

Examples:

- Programming
- AI
- Technology
- Memes
- Finance
- Gaming
- Anime
- Education

Everything else gets blurred or hidden.

---

# 🏗 Architecture

```text
                    Instagram Reels
                           │
                           ▼
                 Chrome Extension
                           │
                           ▼
               Detect Current Reel
                           │
                           ▼
                Extract Reel Metadata
                           │
                           ▼
                 FastAPI Backend API
                           │
                           ▼
                   AI Classification
                           │
             ┌─────────────┴──────────────┐
             ▼                            ▼
      Allowed Content             Blocked Content
             │                            │
             ▼                            ▼
       Display Reel              Blur / Hide Reel
```

---

# 🛠 Tech Stack

## Frontend

- JavaScript
- HTML5
- CSS3
- Chrome Extension API
- Manifest V3

## Backend

- Python
- FastAPI
- Uvicorn

## AI (Current)

- Rule-based classifier

## AI (Upcoming)

- Sentence Transformers
- CLIP
- Whisper
- EasyOCR
- Qwen2.5-VL
- ChromaDB
- LangChain

---

# 📂 Folder Structure

```text
doomscroll/
│
├── extension/
│   ├── manifest.json
│   ├── background.js
│   ├── content.js
│   ├── popup.html
│   ├── popup.css
│   ├── popup.js
│   ├── options.html
│   ├── options.js
│   └── icons/
│
└── backend/
    ├── app.py
    ├── classifier.py
    ├── requirements.txt
    ├── prompts.py
    ├── models.py
    └── options.py
```

---

# ⚙ Installation

## 1. Clone Repository

```bash
git clone https://github.com/Gireesh-mlgs/doomscroll.git

cd doomscroll
```

---

## 2. Create Virtual Environment

Windows

```bash
python -m venv venv
```

Activate

```bash
venv\Scripts\activate
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Run Backend

```bash
uvicorn app:app --reload
```

Backend starts at

```
http://127.0.0.1:8000
```

---

## 5. Load Chrome Extension

Open

```
chrome://extensions
```

Enable

```
Developer Mode
```

Click

```
Load unpacked
```

Choose

```
extension/
```

---

# 🎯 How It Works

## Step 1

The extension detects the currently visible Instagram Reel.

↓

## Step 2

It extracts the Reel information.

↓

## Step 3

The information is sent to the FastAPI backend.

↓

## Step 4

The backend classifies the content.

↓

## Step 5

The extension either

- Shows the reel
- Blurs the reel
- Completely hides the reel

---

# Current AI Pipeline

```text
Instagram Reel

        │

        ▼

Chrome Extension

        │

        ▼

Caption

        │

        ▼

Keyword Classifier

        │

        ▼

Allowed / Blocked

        │

        ▼

Hide Reel
```

---

# Future AI Pipeline

```text
Instagram Reel
        │
        ▼
Extract Caption
        │
        ▼
Extract Image
        │
        ▼
OCR
        │
        ▼
Speech To Text
        │
        ▼
Sentence Embeddings
        │
        ▼
Vision Language Model
        │
        ▼
Semantic Classification
        │
        ▼
Recommendation Engine
        │
        ▼
Hide / Show
```

---

# Available Topics

Users can customize the feed by selecting topics such as:

- Programming
- Artificial Intelligence
- Machine Learning
- Technology
- Science
- Finance
- Crypto
- Gaming
- Anime
- Education
- History
- Movies
- Music
- Memes
- Sports
- Travel
- Fitness
- Food
- Politics
- Fashion
- Photography

---

# Example

User Preferences

```text
✅ Programming

✅ AI

✅ Technology

❌ Politics

❌ Celebrity News

❌ Clickbait

❌ Relationship Content
```

Only matching reels will remain visible.

---

# Current Limitations

- Keyword-based filtering
- Instagram DOM changes frequently
- Limited image understanding
- No audio analysis yet
- No OCR support

---

# Planned Features

## AI

- Semantic Search
- Vision Language Models
- CLIP
- Whisper
- OCR
- Personalized AI

---

## Chrome Extension

- Settings Sync
- User Profiles
- Analytics Dashboard
- Export Preferences

---

## Supported Platforms

- Instagram Reels
- YouTube Shorts
- Facebook Reels
- X (Twitter) Videos
- TikTok (Future)

---

# Screenshots

Coming Soon

---

# Roadmap

## Version 1

- Chrome Extension
- FastAPI Backend
- Keyword Filtering

---

## Version 2

- Sentence Transformers
- CLIP
- OCR
- Whisper

---

## Version 3

- Personalized AI
- Embedding Search
- Recommendation Engine

---

## Version 4

- Multi-platform Support
- Cloud Sync
- Dashboard
- Browser Statistics

---

# Requirements

- Python 3.10+
- Google Chrome
- FastAPI
- Uvicorn

Recommended

- NVIDIA GPU
- CUDA
- 16 GB RAM

---

# Contributing

Contributions are welcome.

```bash
Fork the repository

↓

Create your feature branch

↓

Commit your changes

↓

Push to your branch

↓

Open a Pull Request
```

---


# Disclaimer

This project is intended for educational and research purposes only.

It is not affiliated with, endorsed by, or associated with Instagram or Meta.

Users are responsible for complying with Instagram's Terms of Service and all applicable laws when using this software.

---

# ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork it

💡 Suggest new features

🐞 Report bugs

---

## 👨‍💻 Author

Made with ❤️ by **Gireesh Kumar**

If you like the project, don't forget to ⭐ the repository!
