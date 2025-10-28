
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="pt-br">
    <head>
      <meta charset="utf-8"/>
      <title>Home — Node Request-Response</title>
      <style>
        body { font-family: Arial, sans-serif; background:#f5f5f5; padding:2rem; }
        a { margin-right:1rem; color:#0070f3; text-decoration:none; }
        .card { background:white; padding:1rem; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.1); }
      </style>
    </head>
    <body>
      <h1>Bem-vindo ao servidor Node.js versão 2.0!</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </nav>
      <div class="card">
        <p>Esta é a rota <strong>/</strong>. Aqui você está vendo a resposta HTML enviada pelo servidor via modelo request-response.</p>
      </div>
    </body>
    </html>
  `);
});


app.get('/sobre', (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="pt-br">
    <head>
      <meta charset="utf-8"/>
      <title>Sobre — Node Request-Response</title>
      <style>
        body { font-family: Georgia, serif; background:#fffaf0; padding:2rem; color:#222; }
        a { margin-right:1rem; color:#c2410c; text-decoration:none; }
      </style>
    </head>
    <body>
      <h1>Sobre o Projeto</h1>
      <p>Este projeto demonstra o funcionamento do modelo request-response com Node.js e Express.</p>
      <ul>
        <li>3 rotas diferentes com respostas HTML</li>
        <li>Middleware simples para log</li>
        <li>Tratamento de erro 404</li>
      </ul>
      <a href="/">Voltar</a> | <a href="/contato">Contato</a>
    </body>
    </html>
  `);
});


app.get('/contato', (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="pt-br">
    <head>
      <meta charset="utf-8"/>
      <title>Contato — Node Request-Response</title>
      <style>
        body { font-family: Arial, sans-serif; background:#eef2ff; padding:2rem; }
        form { background:white; padding:1rem; border-radius:8px; max-width:500px; box-shadow:0 4px 12px rgba(0,0,0,0.1); }
        label { display:block; margin-top:0.5rem; }
        input, textarea { width:100%; padding:0.5rem; margin-top:0.25rem; border:1px solid #ccc; border-radius:4px; }
        button { margin-top:1rem; background:#0070f3; color:white; padding:0.5rem 1rem; border:none; border-radius:4px; cursor:pointer; }
      </style>
    </head>
    <body>
      <h1>Contato</h1>
      <form onsubmit="alert('Mensagem não enviada — formulário apenas ilustrativo!'); return false;">
        <label>Nome:<input type="text" placeholder="Seu nome"/></label>
        <label>Email:<input type="email" placeholder="seuemail@exemplo.com"/></label>
        <label>Mensagem:<textarea rows="4" placeholder="Escreva sua mensagem"></textarea></label>
        <button type="submit">Enviar</button>
      </form>
      <a href="/">Voltar</a>
    </body>
    </html>
  `);
});


app.use((req, res) => {
  res.status(404).send(`
    <!doctype html>
    <html lang="pt-br">
    <head><meta charset="utf-8"/><title>404 — Não encontrado</title></head>
    <body style="font-family:Arial;padding:2rem;">
      <h1>Erro 404 — Página não encontrada</h1>
      <p>A rota <strong>${req.originalUrl}</strong> não existe neste servidor.</p>
      <a href="/">Voltar para a Home</a>
    </body>
    </html>
  `);
});


app.listen(port, () => {
  console.log(`✅ Servidor rodando em http://localhost:${port}`);
});
