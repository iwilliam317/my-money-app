const mongoose = require('mongoose')

const url = process.env.MONGOLAB_URI_MY_MONEY || 'mongodb://localhost:27017/mymoney' || 'mongodb://mongo:27017/mymoney'

mongoose.connect(url, (error, response) => {
  if (error) console.log (`ERROR connecting to:  ${url} -  ${error}`);
  else console.log (`Succeeded connected to: ${url}`);
})

mongoose.Promise = global.Promise;

//mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"