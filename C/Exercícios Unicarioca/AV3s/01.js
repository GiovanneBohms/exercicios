function al() {
  let x = 0;
  let y = 5;
  let n = 0;

  do {
    n = n + 1;
    x = x + 1;
    y = y - 1;

    console.log(n, x, y);
  } while (n == 4);

  console.log(n, x, y);
}

al();
