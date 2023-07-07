import pegaArquivo from "./index.js";

const caminho = process.argv;
console.log(caminho[2])

pegaArquivo(caminho[2])