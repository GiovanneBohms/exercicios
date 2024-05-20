import http from 'http';


const PORT = 3000;

const rotas = {
    "/": "Curso de de express.js",
    "/livros":"entre na rota livros",
    "/autores": "entrei na rota autores"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
    console.log(req) 
});

server.listen(PORT, () => {
    console.log("servidor escutando na porta " + PORT);
    
});
