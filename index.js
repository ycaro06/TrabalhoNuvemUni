const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Projeto atualizado!</h1><p>Aplicação Node.js na AWS e Railway</p>");
});
app.get("/produtos", (req, res) => {
  res.send("<h1>Produtos</h1><ul><li>Teclado</li><li>Mouse</li></ul>");
});

app.get("/produto/:id", (req, res) => {
  const id = req.params.id;

  if (!/^\d+$/.test(id)) {
    return res.status(400).send("<h1>ID inválido</h1>");
  }

  res.send(`<h1>Produto ${id}</h1>`);
});

app.get("/consulta", (req, res) => {
  const cpf = String(req.query.cpf || "");
  const codigo = /^\d+$/.test(cpf) ? cpf : "não informado";

  res.send(`<h1>Consulta</h1><p>Código de teste: ${codigo}</p>`);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});