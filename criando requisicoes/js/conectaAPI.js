async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function criavideo  (titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}

async function buscaVideo (termoDeBusca){
    const conectaApi = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conectaApi.json();

    return conexaoConvertida
}


export const conectaApi = {
    listaVideos,
    criavideo,
    buscaVideo
}