const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose.connect('mongodb://localhost:27017/padoca-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MONGO DB CONECTADO'))
  .catch((err) => console.log(`Erro na conexão om o banco: ${err}`))
}

module.exports = connectToDatabase
