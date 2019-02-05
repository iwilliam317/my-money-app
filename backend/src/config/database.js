const mongoose = require('mongoose')

const url = process.env.MONGOLAB_URI_MY_MONEY || 'mongodb://localhost/mymoney'

mongoose.connect(url, (error, response) => {
  if (error) console.log (`ERROR connecting to:  ${url} -  ${error}`);
  else console.log (`Succeeded connected to: ${url}`);
})

