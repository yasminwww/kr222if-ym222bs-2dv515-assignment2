const express = require('express') /* eslint-disable */
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {

})

// app.use('/', require('./routes/ratings'))

app.listen(PORT, () => { console.log('Server is running on: ' + PORT) })