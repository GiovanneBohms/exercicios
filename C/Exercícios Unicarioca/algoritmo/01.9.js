function al(n) {
  if (n <= 1) {
    return 1
  } else {
    return (n-1) + al(n-2);
  }
}
let result1 = al(5)
let result2= al(6)
let result3= result1+result2

// o GPT deu 21 e em algoritmo em tem como resultado 17 também
console.log(result3)


