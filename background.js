chrome.alarms.create("trackTime", { periodInMinutes: 1 });
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "trackTime") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        const url = new URL(tabs[0].url);
        chrome.storage.local.get([url.hostname], (data) => {
          const timeSpent = (data[url.hostname] || 0) + 1;
          chrome.storage.local.set({ [url.hostname]: timeSpent });
        });
      }
    });
  }
});
