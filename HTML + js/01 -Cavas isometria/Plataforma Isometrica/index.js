function tamanhoGrade(){
  return 20;
}

function tamanhoCanvas(){
return 480;
}

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.addEventListener("click", function(event) {
// Obtém as coordenadas do clique dentro do canvas
const mouseX = event.offsetX
const mouseY = event.offsetY

let coordenadas = {
  'X':mouseX,
  'Y':mouseY
} 
// Faça algo com as coordenadas do clique

console.log(`Y em ${mouseX} X em ${mouseY}`);

filtraCoordenada(mouseX,mouseY)


});

function filtraCoordenada(x,y){
const tamanhoCubico =  20;
const xSaida = Math.trunc(x/tamanhoCubico);
const ySaida = Math.trunc(y/tamanhoCubico)-1;
desenhaCaixa3D(xSaida, ySaida);
}

function delay(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

async function criaObjetos() {
for (let i = 0; i < 30; i++) {
  await delay(500);
  desenhaCaixa3D(i, i); // Certifique-se de que a função desenhaCaixa3D esteja definida e funcional
  }
}

// Chame a função para iniciar o processo
// criaObjetos();

function desenhaPlataforma() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const gridSize = tamanhoGrade();
  const canvasSize = tamanhoCanvas();

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

function retaComGrau(){
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d"); // Defina o ponto inicial da reta
  const startX = 0; // coordenada x inicial
  const startY = 480; // coordenada y inicial
  const length = 800; // Comprimento da reta
  const angleInDegrees = 30; // Ângulo em graus (30 graus)
  const angleInRadians = (angleInDegrees * Math.PI) / 180; // Converta o ângulo de graus para radianos
  const endX = startX + length * Math.cos(angleInRadians); // Calcule as coordenadas finais da reta
  const endY = startY - length * Math.sin(angleInRadians); // Subtrai o valor y para inverter a direção do ângulo
      // Desenhe a reta
  ctx.strokeStyle = "#C0C0C0	"
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  console.log(`endX ${endX} endY${endY}`)
}
retaComGrau()


async function desenhaCaixa3D(x, y) {

  const atraso=0;
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


