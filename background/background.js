chrome.tabs.onUpdated.addListener((tabId, tab) => {
   if (tab.status == "complete") {
      chrome.tabs.sendMessage(tabId, {
         type: "background to content",
      }, (response) => {
         console.log(response);
      });
   };
});

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
   console.log(request);

   if (request.type === "content to background") {
      sendResponse({ farewell: "response from background script content" });
   } else if (request.type === "popup to background") {
      sendResponse({ farewell: "response from background script popup" });
   }
   return true;
});
