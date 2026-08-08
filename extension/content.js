console.log("🚀 DoomScroll AI Loaded");

const processed = new WeakSet();

async function analyzeVideo(video) {
    if (processed.has(video)) return;
    processed.add(video);

    console.log("🎥 Reel detected");

    const rect = video.getBoundingClientRect();

    if (rect.bottom < 0 || rect.top > window.innerHeight)
        return;

    const data = {
        url: location.href,
        username: "",
        caption: "",
        hashtags: [],
        audio: "",
        likes: "",
        comments: "",
        image: video.poster || "",
        timestamp: new Date().toISOString()
    };

    // ----------------------------
    // Read all visible spans
    // ----------------------------
    const spans = [...document.querySelectorAll('span[dir="auto"]')];

    spans.forEach(span => {

        const text = span.innerText.trim();

        if (!text) return;

        // Username
        if (!data.username &&
            /^[a-zA-Z0-9._]{3,30}$/.test(text)) {

            data.username = text;
            return;
        }

        // Audio
        if (!data.audio &&
            text.includes("·")) {

            data.audio = text;
        }

        // Caption
        if (!data.caption &&
            text.length > 40 &&
            !text.includes("·")) {

            data.caption = text;
        }

        // Hashtags
        const tags = text.match(/#\w+/g);

        if (tags) {
            data.hashtags.push(...tags);
        }

    });

    // ----------------------------
    // Likes / Comments
    // ----------------------------

    document.querySelectorAll("span").forEach(span => {

        const text = span.innerText.trim();

        if (/^\d+(\.\d+)?[KMB]?$/.test(text)) {

            if (!data.likes)
                data.likes = text;
            else if (!data.comments)
                data.comments = text;

        }

    });

    console.log("========== DOOMSCROLL AI ==========");
    console.table(data);

    try {

        const response = await fetch("http://127.0.0.1:8000/classify", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        console.log("AI RESULT");
        console.table(result);

        if (!result.allowed) {

            video.style.filter = "blur(35px)";
            video.style.pointerEvents = "none";

            console.log("🚫 Hidden");

        } else {

            console.log("✅ Allowed");

        }

    } catch (e) {

        console.error("Backend Error", e);

    }

}

function scan() {

    document.querySelectorAll("video").forEach(analyzeVideo);

}

scan();

new MutationObserver(scan).observe(document.body, {
    childList: true,
    subtree: true
});

window.addEventListener("scroll", scan);
