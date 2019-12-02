const youtube = document.getElementById('youtube');

// ストレージから情報を取得
chrome.storage.sync.get(['youtube'], (value) => {
    youtube.checked = value.youtube;
});

// youtubeの有効と無効を切り替え
youtube.addEventListener('click', () => {
    chrome.storage.sync.set({ 'youtube': youtube.checked });
});