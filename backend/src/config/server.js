const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3003

app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())

app.listen(port, () => console.log(`API is running on port ${port}`))

module.exports = app