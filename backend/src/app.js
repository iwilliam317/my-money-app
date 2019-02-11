const app = require('./config/server')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')


const accessLogStream = fs.createWriteStream(
    path.join(`${__dirname}/logs`, 'access.log'), { flags: 'a' }
)

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended : true}))

app.use(morgan('combined', { stream: accessLogStream }))

require('./config/routes')(app)