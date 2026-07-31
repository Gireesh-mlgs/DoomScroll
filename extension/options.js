const TOPICS = [

    "Programming",
    "AI",
    "Dank Meme",
    "Gaming",
    "Anime",
    "Technology",
    "Science",
    "Finance",
    "Travel",
    "History",
    "Education",
    "Music",
    "Sports",
    "Fitness",
    "Politics",
    "Celebrities",
    "Relationship",
    "Food",
    "Fashion"

];

const topicContainer = document.getElementById("topics");

TOPICS.forEach(topic => {

    const label = document.createElement("label");

    label.style.display = "block";

    label.innerHTML = `
        <input
            type="checkbox"
            value="${topic}">
        ${topic}
    `;

    topicContainer.appendChild(label);

});

function loadSettings() {

    chrome.storage.local.get(
        [
            "enabled",
            "blurMode",
            "topics",
            "hiddenCount"
        ],
        (data) => {

            document.getElementById("enabled").checked =
                data.enabled ?? true;

            document.getElementById("blurMode").checked =
                data.blurMode ?? false;

            document.getElementById("hiddenCount").textContent =
                data.hiddenCount || 0;

            const selected =
                data.topics || [];

            document
                .querySelectorAll("#topics input")
                .forEach(box => {

                    box.checked =
                        selected.includes(box.value);

                });

        }
    );

}

loadSettings();

document
.getElementById("save")
.addEventListener("click", () => {

    const selected = [];

    document
    .querySelectorAll("#topics input")
    .forEach(box => {

        if (box.checked)
            selected.push(box.value);

    });

    chrome.storage.local.set({

        enabled:
            document.getElementById("enabled").checked,

        blurMode:
            document.getElementById("blurMode").checked,

        topics: selected

    }, () => {

        document.getElementById("status").textContent =
            "✅ Settings Saved";

        setTimeout(() => {

            document.getElementById("status").textContent = "";

        }, 2000);

    });

});

document
.getElementById("resetHidden")
.addEventListener("click", () => {

    chrome.storage.local.set({
        hiddenCount: 0
    }, () => {

        document.getElementById("hiddenCount").textContent = 0;

    });

});