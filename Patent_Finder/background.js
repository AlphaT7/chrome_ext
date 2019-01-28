// "activeTab", "declarativeContent",

// Listen for message from content_script.js
/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {});
*/

// Send message to content_script.js Note that you need to know the tabId that you are sending it to.
/*
function sendMessage(message) {
  chrome.tabs.sendMessage(tabId, { status: message }, function() {});
}
*/
// This will store data to the local storage if needed (note need to turn on "storage" permission in manifest.json
/*
function storeData(storeThis) {
  chrome.storage.local.set({ results: storeThis }, function() {});
}
*/
// This will get stored data from local storage
/*
function getData() {
  chrome.storage.local.get(["results"], function(final) {
    chrome.storage.local.clear();
    sendFinalData(final.results);
    console.log("printing final results", final.results);
  });
}
*/

// A generic onclick callback function.
function searchPatents(searchterms, searchtype) {
  let str = searchterms.replace(/\s/gi, "+");
  switch (searchtype) {
    case "USPTO_ALL":
      chrome.tabs.create({
        url:
          "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=0&f=S&l=50&TERM1=" +
          str +
          "&FIELD1=&co1=AND&TERM2=&FIELD2=&d=PTXT"
      });
      break;
    case "USPTO_GOVT":
      chrome.tabs.create({
        url:
          "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=0&f=S&l=50&TERM1=" +
          str +
          "&FIELD1=&co1=AND&TERM2=united+states+of+america&FIELD2=ASNM&d=PTXT"
      });
      break;
    case "SBIR_KEYWORDS":
      chrome.tabs.create({
        url:
          "https://www.sbir.gov/search-result-page?search=" +
          searchterms.replace(/\s/gi, "%20")
      });
      break;
    case "GOOGLE_SCHOLAR":
      chrome.tabs.create({
        url: "https://scholar.google.com/scholar?q=" + str
      });
      break;
    default:
      break;
  }
}

chrome.runtime.onInstalled.addListener(function() {
  var USPTO_All = chrome.contextMenus.create({
    id: "USPTO_All",
    title: "USPTO All Search",
    contexts: ["selection"],
    onclick: function(info, tab) {
      searchPatents(info.selectionText, "USPTO_ALL");
    }
  });
  var USPTO_Govt = chrome.contextMenus.create({
    id: "USPTO_Govt",
    title: "USPTO Government Search",
    contexts: ["selection"],
    onclick: function(info, tab) {
      searchPatents(info.selectionText, "USPTO_GOVT");
    }
  });
  var SBIR_Keywords = chrome.contextMenus.create({
    id: "SBIR_Keywords",
    title: "SBIR Keywords Search",
    contexts: ["selection"],
    onclick: function(info, tab) {
      searchPatents(info.selectionText, "SBIR_KEYWORDS");
    }
  });
  var google_scholar = chrome.contextMenus.create({
    id: "google_scholar",
    title: "Google Scholar Search",
    contexts: ["selection"],
    onclick: function(info, tab) {
      searchPatents(info.selectionText, "GOOGLE_SCHOLAR");
    }
  });
});
