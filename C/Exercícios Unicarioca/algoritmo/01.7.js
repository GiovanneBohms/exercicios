let v;
let i = 0;
function al(x, y) {
  if (x < y) {
    return y * (v + 1);
  }
  x = x / y + x - y;
  v = v + 1;
  i++;
  console.log(i);
  al(x, y);
}
// infinito
al(9, 3);
