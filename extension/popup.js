
const enableCheckbox = document.getElementById("enabled");
const topicCheckboxes = document.querySelectorAll(".topics input[type='checkbox']");
const saveButton = document.getElementById("saveBtn");
const status = document.getElementById("status");
const hiddenCount = document.getElementById("hiddenCount");

// Load saved settings
document.addEventListener("DOMContentLoaded", loadSettings);

function loadSettings() {
    chrome.storage.local.get(
        ["enabled", "topics", "hiddenCount"],
        (result) => {

            enableCheckbox.checked = result.enabled ?? true;

            const selectedTopics = result.topics || [];

            topicCheckboxes.forEach(box => {
                box.checked = selectedTopics.includes(box.value);
            });

            hiddenCount.textContent = result.hiddenCount || 0;
        }
    );
}

// Save settings
saveButton.addEventListener("click", () => {

    const selectedTopics = [];

    topicCheckboxes.forEach(box => {
        if (box.checked) {
            selectedTopics.push(box.value);
        }
    });

    chrome.storage.local.set(
        {
            enabled: enableCheckbox.checked,
            topics: selectedTopics
        },
        () => {

            status.textContent = "✅ Preferences Saved";

            setTimeout(() => {
                status.textContent = "";
            }, 2000);

        }
    );

});

chrome.storage.onChanged.addListener((changes, area) => {

    if (area !== "local") return;

    if (changes.hiddenCount) {
        hiddenCount.textContent = changes.hiddenCount.newValue;
    }

});
