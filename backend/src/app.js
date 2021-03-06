const app = require('./config/server')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const queryParser = require('express-query-int')

const accessLogStream = fs.createWriteStream(
    path.join(`${__dirname}/logs`, 'access.log'), { flags: 'a' }
)

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended : true}))
app.use(queryParser())

app.use(morgan('combined', { stream: accessLogStream }))

//  app.use(errorHandler)
console.log(process.env.NODE_ENV)
require('./config/routes')(app)

module.exports = app