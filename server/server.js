const express = require('express') /* eslint-disable */
const bodyParser = require('body-parser')

const app = express()

const PORT = process.env.PORT || 8000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('We are on the web!')
})

// app.use('/', require('./routes/ratings'))

app.listen(PORT, () => { console.log('Server is running on: ' + PORT) })