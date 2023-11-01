function al() {
  let x = 7;
  let s = 0;
  y = 5;

  if (x > 4) {
    if (y > 4) {
      console.log(y=y-1)
    } else {
      console.log((x = x - 1));
      console.log((s = s + x));
      console.log(y, x);
    }
  } else {
    console.log(s);
  }
}
al();
