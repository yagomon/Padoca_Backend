const express = require('express');
const cors = require('cors')
const routes = require('./src/routes/produtos.route');
const connectToDatabase = require('./src/database/database');

const port = 3001;
const app = express();

connectToDatabase();


app.use(express.json());
app.use(cors());
app.use("/produtos", routes)



app.listen(port, () => {
  console.info(`Rodando em http://localhost:${port}`);
});
