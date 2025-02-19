chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "formatNumber",
    title: "Format Number with Commas",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "formatNumber" && info.selectionText) {
    const selectedText = info.selectionText.trim();

    // Validate if the selection is a valid number
    if (!isNaN(selectedText)) {
      const formattedNumber = formatWithCommas(selectedText);

      // Open a new popup window to display the result
      chrome.windows.create({
        url: `popup.html?result=${encodeURIComponent(formattedNumber)}`,
        type: "popup",
        width: 300,
        height: 200
      });
    } else {
      chrome.windows.create({
        url: `popup.html?result=Invalid%20selection.%20Please%20select%20a%20valid%20number.`,
        type: "popup",
        width: 300,
        height: 200
      });
    }
  }
});

// Helper function to format numbers with commas
function formatWithCommas(number) {
  // Ensure the input is treated as a string
  const numberString = number.toString();

  // Use a regular expression to insert commas every three digits from the right
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

