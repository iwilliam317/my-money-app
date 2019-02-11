const express = require('express')
const app = express()

const port = process.env.PORT || 3003

app.listen(port, () => console.log(`API is running on port ${port}`))

module.exports = app