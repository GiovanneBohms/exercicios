import fs from 'fs';
import chalk from "chalk";



function extraiLinks(texto){
    const regex = /\[([^\[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map((captura)=>({[captura[1]]: captura[2]}))
    console.log(resultados)
}

 


function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.blue(erro.code,'deu ruim'))
}


async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto)

    } catch (erro) {
        trataErro(erro)
    }    
}



 pegaArquivo('./arquivos/texto.md');


export default pegaArquivo;