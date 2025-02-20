document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(null, (data) => {
    const reportDiv = document.getElementById("report");
    reportDiv.innerHTML = "<h3>Time Spent:</h3>";
    for (const site in data) {
      reportDiv.innerHTML += `<p>${site}: ${data[site]} minutes</p>`;
    }
  });
});