function recursiva (x){
  if(x==1){
    return -x
  }else{
    return -5*recursiva(x-1)+x
  }

}

let result = recursiva(4)
console.log(result)
