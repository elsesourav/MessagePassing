chrome.runtime.sendMessage({
   type: "content to background",
}, (response) => {
   console.log(response);
});
chrome.runtime.sendMessage({
   type: "content to popup",
}, (response) => {
   console.log(response);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
   console.log(request);

   if (request.type === "background to content") {
      sendResponse({ farewell: "response form content script to background" });
   } else if (request.type === "popup to content") {
      sendResponse({ farewell: "response form content script to popup" });
   }

   return true;
});
