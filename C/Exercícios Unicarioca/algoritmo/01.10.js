function al (n){
  if (n=1){
    return 0;
  }
  if(n=2){
    return 2
  }
  return al(n-1)+al(n-2)
}

let result = al(6)

console.log(result)