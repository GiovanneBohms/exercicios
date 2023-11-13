console.log("./src/index.js");

const configuracao = {
  // Config para coleta de API
  quantidadeParaPesquisar: 5000,
  ofertasMinimas: 5000,
  precoPrimario: 10.0,
  //Config após coleta de API
  horas: 336,
  volume: 10000,
  precoMinimo: 0.1,
  precoMaximo: 0.4,
};

async function coletaItens(intervalo) {
  let objetos = await dadosPrimarios(intervalo);
  let itens = [];
  for (let i = 0; i < objetos.results.length; i++) {
    let item = {
      precoDeVenda: objetos.results[i].sell_price,
      ofertasListadas: objetos.results[i].sell_listings,
      name: encodeURIComponent(objetos.results[i].hash_name),
      id: objetos.results[0].asset_description.appid,
      cotacao: [],
    };
    if (item.ofertasListadas >= configuracao.ofertasMinimas) {
      itens.push(item);
    } else {
      continue;
    }
  }
  return itens;
}

async function verificaCotacao() {
  let itens = await coletaItens(100);
  let contacaoFicticia = [
    [1.49, 4517],
    [1.49, 4147],
    [1.48, 3507],
  ];

  itens[0].cotacao = contacaoFicticia;
  console.log(itens[0]);
  console.log("olaaa");
}
verificaCotacao();
