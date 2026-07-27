// content.js

console.log("🚀 DoomScroll AI Loaded");

const processedPosts = new WeakSet();

function extractPostData(article) {
    try {
        if (processedPosts.has(article)) return;

        processedPosts.add(article);

        // Caption
        let caption = "";

        const captionSpan = article.querySelector("h1, span._ap3a, div[role='button'] span");

        if (captionSpan) {
            caption = captionSpan.innerText;
        }

        // Hashtags
        const hashtags = caption.match(/#\w+/g) || [];

        // Image
        const img = article.querySelector("img");

        const image = img ? img.src : "";

        const data = {
            caption,
            hashtags,
            image
        };

        console.log("📄 DoomScroll AI:", data);

        // TODO:
        // sendToBackend(data, article);

    } catch (err) {
        console.error(err);
    }
}

function scanFeed() {
    const articles = document.querySelectorAll("article");

    articles.forEach(extractPostData);
}

const observer = new MutationObserver(() => {
    scanFeed();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

scanFeed();