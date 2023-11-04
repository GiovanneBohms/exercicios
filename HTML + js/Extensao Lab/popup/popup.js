document.addEventListener("DOMContentLoaded", function () {
  // Adicione um ouvinte de evento para o botão
  var injetarBotao = document.getElementById("botao");
  injetarBotao.addEventListener("click", function () {
    // Execute a injeção do script
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Obtenha a guia ativa
      var tab = tabs[0];
      // Injete o script na guia ativa
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: function () {
          // Coloque o código que você deseja injetar na página aqui
          // Por exemplo, você pode usar fetch para carregar e injetar o conteúdo do arquivo injecao/index.js
          fetch(chrome.extension.getURL("injecao/index.js"))
            .then((response) => response.text())
            .then((script) => {
              var scriptElement = document.createElement("script");
              scriptElement.textContent = script;
              document.head.appendChild(scriptElement);
          });
        },
      });
    });
  });
});
