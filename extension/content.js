console.log("🚀 DoomScroll AI Loaded");

const processed = new WeakSet();

async function analyzeVideo(video) {
    if (processed.has(video)) return;
    processed.add(video);

    console.clear();
    console.log("🎥 Reel detected");

    const rect = video.getBoundingClientRect();

    console.log("VIDEO RECT:", rect);

    const spans = [...document.querySelectorAll('span[dir="auto"]')];

    spans.forEach((span, i) => {
        const r = span.getBoundingClientRect();

        if (r.width === 0 || r.height === 0) return;

        console.log({
            index: i,
            text: span.innerText,
            top: Math.round(r.top),
            left: Math.round(r.left),
            width: Math.round(r.width),
            height: Math.round(r.height)
        });
    });
}

function scan() {
    document.querySelectorAll("video").forEach(analyzeVideo);
}

scan();

new MutationObserver(() => {
    scan();
}).observe(document.body, {
    childList: true,
    subtree: true
});
