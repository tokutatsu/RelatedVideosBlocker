// どのコンテンツに飛んだかを確認して有効か無効化を判定する
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.contents == 'youtube') {
        chrome.storage.sync.get('youtube', (value) => {
            sendResponse(value.youtube);
        });
    }
    // 同期的に待つ場合は明示的にtrueを返す
    return true;
});