console.log("Running background page");

// Here is the code to open a page
//chrome.tabs.create({ url: "https://www.caesargroup.org" });

// Listen for message from content_script.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  let str = request.paramter1.replace(/\s/gi, "+");
  let USTP_URL =
    "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=0&f=S&l=50&TERM1=" +
    str +
    "&FIELD1=&co1=AND&TERM2=&FIELD2=&d=PTXT";

  chrome.tabs.create({ url: USTP_URL });
});

// Send message to content_script.js Note that you need to know the tabId that you are sending it to.
function sendMessage(message) {
  chrome.tabs.sendMessage(tabId, { status: message }, function() {});
}

// This will store data to the local storage if needed (note need to turn on "storage" permission in manifest.json
function storeData(storeThis) {
  chrome.storage.local.set({ results: storeThis }, function() {});
}

// This will get stored data from local storage
function getData() {
  chrome.storage.local.get(["results"], function(final) {
    chrome.storage.local.clear();
    sendFinalData(final.results);
    console.log("printing final results", final.results);
  });
}
