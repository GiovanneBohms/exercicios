function delay (tempo){
  return new Promise (resolve =>{
    setTimeout(resolve,tempo);
  })
}

async function carregamento(){
  console.log("inicio pfizer");

  await delay(5000)
  module1()
  
  console.log("fim  pfizer");
}

carregamento()


