chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: function () {
      // Não é necessário adicionar código aqui
    },
  });
});
