chrome.storage.local.get(null, (data) => {
  chrome.runtime.sendMessage({ type: "updateReport", data });
});

chrome.storage.local.get("blockedSites", (result) => {
  const blockedSites = result.blockedSites || [];
  const currentSite = window.location.hostname;
  if (blockedSites.includes(currentSite)) {
    document.body.innerHTML = "<h1>Blocked Site</h1><p>This site is blocked due to productivity settings.</p>";
  }
});