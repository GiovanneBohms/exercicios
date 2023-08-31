const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = 400;
const height = 400;
const angle = 30 * (Math.PI / 180);

canvas.width = width;
canvas.height = height;

let positionX = 0;
let positionY = height;

function drawLine() {
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.moveTo(0, height);
  ctx.lineTo(positionX, positionY);
  ctx.stroke();

  positionX += Math.cos(angle); // Incremento na direção x
  positionY -= Math.sin(angle); // Decremento na direção y

  if (positionX <= width && positionY >= 0) {
    requestAnimationFrame(drawLine);
  }
}

drawLine();