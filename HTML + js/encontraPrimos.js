const text = document.querySelector(".console");

function divisao(numerador, denominador) {
  let resultado = 0;
  let resto = 0;
  while (numerador > 0) {
    numerador = numerador - denominador;
    resultado++;
    console.log(`iteração ${resultado}`);
    if (numerador < denominador) {
      resto = numerador;
      break;
    }
  }
  return [resultado, resto];
}

function verificaSeEhPrimo(num) {
  
  for (let i = 2; i < num; i++) {
    let resultDivisao = divisao(num, i);
    if(resultDivisao[1]==0){
      console.log("não é primo");
      return null
    }
    if(i+1==num){
      console.log("o valor é primo")
      return true
    }
  }
}

function numerosPrimos() {
  let primos = [3]
  let primoASerVerificado = primos[primos.length-1]
  primoASerVerificado++;
  for(let i = 1; i< 200;i++){
     if(verificaSeEhPrimo(primoASerVerificado)){
      primos.push(primoASerVerificado)
      primoASerVerificado++;
      continue;
     }
     if(verificaSeEhPrimo(primoASerVerificado)==null){
      primoASerVerificado++;
      continue;
     }
  }
  console.log(primos)
}
  



numerosPrimos()
