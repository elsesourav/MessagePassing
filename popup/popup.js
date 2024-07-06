document.addEventListener("DOMContentLoaded", () => {
   chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
      chrome.tabs.sendMessage(
         tab.id,
         { type: "popup to content" },
         (response) => {
            console.log(response);
         }
      );
   });
});

// send message to background js
chrome.runtime.sendMessage({ type: "popup to background" }, (response) => {
   console.log(response);
});

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
   console.log(request);

   if (request.type === "content to popup") {
      sendResponse({ message: "response form popup script to content" });
   }
   return true;
});
