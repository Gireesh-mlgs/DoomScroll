// background.js

console.log("🚀 DoomScroll AI Background Started");

const API_URL = "http://127.0.0.1:8000/classify";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.type !== "CLASSIFY_POST") {
        return;
    }

    console.log("📩 Received classification request");
    console.table(message.data);

    classifyPost(message.data)
        .then(result => {

            console.log("✅ Backend Response");
            console.table(result);

            sendResponse({
                success: true,
                result: result
            });

        })
        .catch(error => {

            console.error("❌ Backend Error:", error);

            sendResponse({
                success: false,
                error: error.message
            });

        });

    // Keep message channel alive
    return true;
});

async function classifyPost(postData) {

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(postData)

        });

        if (!response.ok) {

            const text = await response.text();

            throw new Error(
                `Backend Error ${response.status}: ${text}`
            );

        }

        return await response.json();

    } catch (err) {

        console.error("Network Error:", err);

        return {
            allowed: true,
            reason: "Backend Offline",
            confidence: 0
        };

    }

}

// Extension installed
chrome.runtime.onInstalled.addListener(() => {

    console.log("✅ DoomScroll AI Installed");

    chrome.storage.local.set({

        enabled: true,

        blurMode: true,

        topics: [
            "Programming",
            "AI",
            "Technology"
        ],

        hiddenCount: 0

    });

});

// Toolbar icon clicked
chrome.action.onClicked.addListener((tab) => {

    console.log("Extension clicked:", tab.url);

});
