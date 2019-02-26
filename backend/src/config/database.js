const mongoose = require('mongoose')
const config = require('./environment')

const url = config.mongodbURL

mongoose.connect(url, (error, response) => {
  if (error) console.log (`ERROR connecting to:  ${url} -  ${error}`);
  else console.log (`Succeeded connected to: ${url}`);
})

mongoose.Promise = global.Promise;

//mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"