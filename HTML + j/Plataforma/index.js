function desenhaPlataforma() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const gridSize = 20;
  const canvasSize = 480;

  // Desenhar retas verticais
  for (let x = 0; x <= canvasSize; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvasSize);
    ctx.stroke();
  }

  // Desenhar retas horizontais
  for (let y = 0; y <= canvasSize; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvasSize, y);
    ctx.stroke();
  }
}


desenhaPlataforma();
