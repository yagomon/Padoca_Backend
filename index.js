require('dotenv').config();
const express = require('express');
const cors = require('cors')
const routes = require('./src/routes/produtos.route');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3001;
const app = express();

connectToDatabase();


app.use(express.json());
app.use(cors());
app.use("/produtos", routes)



app.listen(port, () => {
  console.info(`O servidor está rodando na porta:${port}`);
});
