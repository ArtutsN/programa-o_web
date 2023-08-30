const calc = require("./util/calculadora");
const express = require('express');

const app = express();


app.get("/hello", function (req, res) {
    res.send("Ola, mundo web!");
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
})
