const mongoose = require('mongoose')
const conexao = ()=>{
    //conexão com o MongoAtlas
    mongoose.connect('mongodb+srv://userADM:ADM1976@fiaptecnico.n7tnr.mongodb.net/fiap?retryWrites=true&w=majority')
    //conexão local
    //mongoose.connect('mongodb://localhost/fiap')
}
module.exports = conexao
