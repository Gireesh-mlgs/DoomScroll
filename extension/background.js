// background.js

console.log("🚀 DoomScroll AI Background Started");

const API_URL = "http://localhost:8000/classify";

// Receive messages from content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.type === "CLASSIFY_POST") {

        classifyPost(message.data)
            .then(result => {
                sendResponse({
                    success: true,
                    result: result
                });
            })
            .catch(error => {
                console.error(error);

                sendResponse({
                    success: false,
                    error: error.message
                });
            });

        return true; // Keep the message channel open
    }

});

async function classifyPost(postData) {

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    });

    if (!response.ok) {
        throw new Error("Backend request failed");
    }

    return await response.json();
}
