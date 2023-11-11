function facaContas(){
let numero = 3
  for(let i = 1; i<5;i++){
    let array = [7,3,5,2,3]
    if(array[i-1]>4){
      numero = numero+array[i-1]
    }else{
      numero = numero- array[i-1]
    }
  }
  console.log(numero)
}
facaContas()