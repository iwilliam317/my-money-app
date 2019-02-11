const app = require('./config/server')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())

require('./config/routes')(app)