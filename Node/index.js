
async function Vendas24H(id, itemName) {

let response = await fetch(`https://steamcommunity.com/market/priceoverview/?country=BR&currency=7&appid=${id}&market_hash_name=${itemName}`);
let Volatilidade24H = await response.json();
console.log(Volatilidade24H)
///////////////////
if (Volatilidade24H.volume != null){
let volume = Volatilidade24H.volume
let volumeInt = parseInt(volume.replace(",",""))
let precoMedioString = Volatilidade24H.median_price
let precoMedio = precoMedioString.replace("R$","")
let precoMedio0 = parseFloat(precoMedio.replace(",","."))
let volumeMonetario =  precoMedio0*volumeInt

        return (console.log(`${itemName} ${id} 
24H R$:${volumeMonetario}`)) 
      }else{
        return console.log("foi null")
      }

 }


 async function listaDeItens(itens){

    let promessa = await fetch(`
    https://steamcommunity.com/market/search/render/?query=&start=0&count=${itens}&search_descriptions=0&sort_column=popular&sort_dir=desc`)
    let promessaJson = await promessa.json()

    let texto = promessaJson.results_html

  return regex(texto)
 }

let result=[]

 function regex (url) {

  var pattern = /steamcommunity\.com\/market\/listings\/([^\/]+)\/([-\w.%]+)/g;
  var matches = url.matchAll(pattern);

  for (const match of matches) {
    var id = match[1];
    var itemname = match[2];

    var obj = {
      id: id,
      itemname: itemname
    };

    result.push(obj)
  }
}

 

 async function mostraValores(){
  await listaDeItens(100);
  console.log(result);

  for (let i = 0; i < 100; i =i+1) {
    let delayTime = i % 10 === 0 ? 30000 : 100; // Atraso de 1 segundo (1000 milissegundos), exceto a cada 7ª repetição, que será 6 segundos (6000 milissegundos)
    
    await delay(delayTime);
    Vendas24H(result[i].id, result[i].itemname);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

 mostraValores()

