const app = require('./config/server')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const errorHandler = require('./api/v1/middlewares/errorHandler')

const accessLogStream = fs.createWriteStream(
    path.join(`${__dirname}/logs`, 'access.log'), { flags: 'a' }
)

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended : true}))

app.use(morgan('combined', { stream: accessLogStream }))

//  app.use(errorHandler)

require('./config/routes')(app)