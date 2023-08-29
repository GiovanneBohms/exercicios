function fatorial(number){
    let f = []

    for(let i = 0;i<number;i++){
      f.push(number-i) 
    }
    let multiplicaçãoTotal = 1
    for(let i =0; i<f.length;i++){
        multiplicaçãoTotal*=f[i]
    }
    console.log(multiplicaçãoTotal)
}

// fatorial(6)

function fibbo (posicao){
    let arrayFibbo = [1,1]

 for(let i= 1; i<posicao-1; i++){
    arrayFibbo.push(arrayFibbo[i-1]+arrayFibbo[i])
 }

 console.log(arrayFibbo[posicao-1])
 console.log(arrayFibbo)
}

fibbo(1000000)