let youtube = false;

// ボタンが押されたら、状態を入れ替えてリロードする
chrome.browserAction.onClicked.addListener((tab) => {
    youtube = !youtube;

    // 状態をバッジとして表示する
    if (youtube) {
        chrome.browserAction.setBadgeText({ text: "ON" });
    } else {
        chrome.browserAction.setBadgeText({ text: "" });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (youtube && request.contents == 'youtube') {
        sendResponse(true);
    }
    sendResponse(false);
});