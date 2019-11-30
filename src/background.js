let youtube = false;

// ボタンが押されたら、状態を入れ替えてリロードする
chrome.browserAction.onClicked.addListener(function (tab) {
    youtube = !youtube;

    // 状態をバッジとして表示する
    if (youtube) {
        chrome.browserAction.setBadgeText({ text: "ON" });
    } else {
        chrome.browserAction.setBadgeText({ text: "" });
    }

    chrome.tabs.reload(tab.id);
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("hoge")
        if (youtube && request.contents == 'youtube') {
            sendResponse(true);
        }
        sendResponse(false);
    }
);