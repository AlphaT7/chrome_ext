/*
document.onmouseup = function() {
  var selectedText = getSelectedText();
  if (selectedText) {
    sendDataToBGpage(selectedText);
  }
};
*/
/*
document.onkeyup = function(e) {
  console.log(e.code);
  var selectedText = getSelectedText();
  selectedText ? console.log(selectedText) : "";

  let enterkeypressed =
    e.code == "Enter" ? true : e.code == "NumpadEnter" ? true : false;

  enterkeypressed ? (selectedText ? sendDataToBGpage(selectedText) : "") : "";
};

// Send data to bg page
function sendDataToBGpage(data1) {
  chrome.runtime.sendMessage({ paramter1: data1 }, function(response) {});
}
*/
// Listen for messages from BG page
/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.status == "All Done") {
    console.log(request);
  }
  if (request.status == "Terminate") {
    doSomethingDifferent();
  }
});
*/
// Useful function for removing things like <br> or quotation marks etc
/*
function cleanData(data) {
  var thisResult = data.replace(/\r?\n|\r/g, "");
  thisResult = thisResult.replace("[]", "");
  thisResult = thisResult.replace(/'/g, "");
  thisResult = thisResult.replace(/\"/g, "");
  thisResult = thisResult.replace(/\t/g, "");
  thisResult = thisResult.replace(/&nbsp;/gi, " "); // replaces "&nbsp;" with space
  thisResult = thisResult.replace("<br>", " ");
  thisResult = thisResult.trim();
  return thisResult;
}
*/
/*
function getSelectedText() {
  var text = "";
  if (typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();
  } else if (
    typeof document.selection != "undefined" &&
    document.selection.type == "Text"
  ) {
    text = document.selection.createRange().text;
  }
  return text;
}
*/
