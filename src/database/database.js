const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose.connect(process.env.URI_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MONGO DB CONECTADO'))
  .catch((err) => console.log(`Erro na conexão om o banco: ${err}`))
}

module.exports = connectToDatabase
