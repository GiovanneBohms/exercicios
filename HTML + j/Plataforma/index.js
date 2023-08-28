function tamanhoGrade(){
    return 20;
}

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
    ctx.strokeStyle = "blue"; // Cor da linha
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
    ctx.strokeStyle = "green"; // Cor da linha
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
    ctx.strokeStyle = "red"; // Cor da linha
    ctx.lineWidth = 2;       // Largura da linha
    ctx.beginPath();
    ctx.moveTo(startX*gridSize, startY*gridSize);
    ctx.lineTo(endX*gridSize, endY*gridSize);
    ctx.stroke();
  }


function desenhaCaixa3D(){
    desenharLinhaHorizontal(0,1,3);    //(y,startX,endX)
    desenharLinhaHorizontal(1,0,2);    //(y,startX,endX)
    desenharLinhaHorizontal(2,0,2);    //(y,startX,endX)
    
    desenharLinhaDiagonal(0,1,1,0);//(startX,startY,endX,endY)
    desenharLinhaDiagonal(2,2,3,1);//(startX,startY,endX,endY)
    desenharLinhaDiagonal(2,1,3,0);//(startX,startY,endX,endY)

    desenharLinhaVertical(0,1,2);   //(x,startY,endY)
    desenharLinhaVertical(2,1,2);   //(x,startY,endY)
    desenharLinhaVertical(3,0,1);   //(x,startY,endY)
}

    // desenhaPlataforma();
    desenhaCaixa3D()
  