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

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.indexOf('https://www.youtube.com/watch?v=') > -1) {
        console.log(`updated: ${tab.url}`);
        chrome.tabs.executeScript(
            tabId,
            {
                file: '/src/content_scripts/youtube.js',
            },
            (result) => {
                console.log(`executed: ${result}`);
            }
        );
    }
});