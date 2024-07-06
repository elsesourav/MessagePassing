async function getActiveTab() {
   const tabs = await chrome.tabs.query({
      currentWindow: true,
      active: true,
   });
   return tabs[0];
}

function setChromeStorage(key, value) {
   chrome.storage.sync.set({ [key]: JSON.stringify(value) });
}


function wait(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}