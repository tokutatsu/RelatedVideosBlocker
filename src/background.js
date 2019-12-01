// どのコンテンツに飛んだかを確認して有効か無効化を判定する
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.contents == 'youtube') {
        chrome.storage.sync.get('youtube', (value) => {
            sendResponse(value.youtube);
        });
    }
    return true;
});