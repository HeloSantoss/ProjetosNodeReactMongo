const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.error(`Erro ao iniciar o servidor: ${err.message}`);
    process.exit(1);
  }
  console.log(`Servidor rodando em http://localhost:${port}`);
});
