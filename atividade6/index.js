const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine','html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.render("index.html");
});

app.post("/dados", function(req,res){
    let agendamento = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        data_agendamento: req.body.data_agendamento
    };

    let erro_form = false;

    if (agndamento.nome == "") {
        erro_form = true;
    }

    if (agndamento.endereco == "") {
        erro_form = true;
    }

    if (agndamento.telefone == "") {
        erro_form = true;
    }

    if (agndamento.data_agendamento == "") {
        erro_form = true;
    }

    res.render("dados.html", {agendamento});

});

const PORT = 8080;
app.listen(PORT, function (){
    console.log("app rodando na porta");
});