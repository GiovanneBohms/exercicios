function al() {
  let j;
  let x;
  j = 5;
  x = 2;

  do {
    x = x + j;
    j = j + x;  
    console.log("loop?")
  } while (j > 0);

  console.log(x, j);
}

al();
