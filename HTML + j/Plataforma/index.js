function tamanhoGrade(){
    return 20;
}

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.addEventListener("click", function(event) {
  // Obtém as coordenadas do clique dentro do canvas
  const mouseX = event.clientX
  const mouseY = event.clientY

  let coordenadas = {
    'X':mouseX,
    'Y':mouseY
  } 
  // Faça algo com as coordenadas do clique
  console.log(`Y em ${mouseX} X em ${mouseY}`);

});


function desenhaPlataforma() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
  
    const gridSize = tamanhoGrade();
    const canvasSize = 480;
  
    ctx.strokeStyle = "#C0C0C0	"; // Redefine a cor da linha para preto
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
  
  function desenharLinhaHorizontal(y,startX,endX) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const gridSize = tamanhoGrade();
    ctx.strokeStyle = "black"; // Cor da linha
    ctx.lineWidth = 2; // Largura da linha
    ctx.beginPath();
    ctx.moveTo(startX*gridSize, y*gridSize);
    ctx.lineTo(endX*gridSize, y*gridSize);
    ctx.stroke();
  }
  
  function desenharLinhaVertical(x,startY,endY) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const gridSize = tamanhoGrade();
    ctx.strokeStyle = "black"; // Cor da linha
    ctx.lineWidth = 2; // Largura da linha
    ctx.beginPath();
    ctx.moveTo(x*gridSize, startY*gridSize);
    ctx.lineTo(x*gridSize, endY*gridSize);
    ctx.stroke();
  }
  
  function desenharLinhaDiagonal(startX,startY,endX,endY) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const gridSize = tamanhoGrade();
    ctx.strokeStyle = "black"; // Cor da linha
    ctx.lineWidth = 2;       // Largura da linha
    ctx.beginPath();
    ctx.moveTo(startX*gridSize, startY*gridSize);
    ctx.lineTo(endX*gridSize, endY*gridSize);
    ctx.stroke();
  }


  function desenhaCaixa3D(x, y) {
    desenharLinhaHorizontal(y, x + 1, x + 3); // (y, startX, endX)
    desenharLinhaHorizontal(y + 1, x, x + 2); // (y, startX, endX)
    desenharLinhaHorizontal(y + 2, x, x + 2); // (y, startX, endX)
    desenharLinhaDiagonal(x, y + 1, x + 1, y); // (startX, startY, endX, endY)
    desenharLinhaDiagonal(x + 2, y + 2, x + 3, y + 1); // (startX, startY, endX, endY)
    desenharLinhaDiagonal(x + 2, y + 1, x + 3, y); // (startX, startY, endX, endY)
    desenharLinhaVertical(x, y + 1, y + 2); // (x, startY, endY)
    desenharLinhaVertical(x + 2, y + 1, y + 2); // (x, startY, endY)
    desenharLinhaVertical(x + 3, y, y + 1); // (x, startY, endY)
  }

    desenhaPlataforma();

    desenhaCaixa3D(1,0)
    desenhaCaixa3D(1,1)
    desenhaCaixa3D(1,2)
    desenhaCaixa3D(21,22)

    addEventListener
  