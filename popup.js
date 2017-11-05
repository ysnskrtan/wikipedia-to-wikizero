document.addEventListener('DOMContentLoaded', () => {
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		var url = tab.url;
		if (url.indexOf(".wikipedia.") !== -1){
			var newURL = url.replace(/.wikipedia./, '.0wikipedia.');
			//Update the url here.
			chrome.tabs.update(tab.id, {url: newURL});
		}
	});
});