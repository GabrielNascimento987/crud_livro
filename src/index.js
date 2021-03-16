//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);


let id = 2;

let livros =[{
    id: 1,
    titulo: "Lógica de programação",
    autor: "Gabriel Nascimento",
    edicao: "2",
    isbn: "123456"
},
{
    id: 2,
    titulo: "Python 2",
    autor: "Gabriel Nascimento",
    edicao: "1",
    isbn: "123457"
}
];

app.get("/Livros", (req, res, next) => {
    res.status(201).json(livros);
})

app.post("/Livros", (req, res, next) => {
    const livro = {
        id: id +=1,
        titulo: req.body.titulo,
        autor: req.body,descricaom,
        edicao: req.body.edicao,
        isbn: req.body.isbn
    }
    livros.push(livro)
    res.status(201).json(livros);

})

app.put("livros/", (req, res, next) => {
    livros.forEach(livro) => {
        if(livro.id === req.body.id)
    }
})