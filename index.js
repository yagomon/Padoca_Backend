const express = require('express');
const routes = require('./routes/produtos.route')

const port = 3001;
const app = express();

app.use(express.json());


app.use("/produtos", routes)



app.listen(port, () => {
  console.info(`Rodando em http://localhost:${port}`);
});
