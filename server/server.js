const express = require('express') /* eslint-disable */
const bodyParser = require('body-parser')
const hierchy = require('./algorithms/hcluster')

const app = express()

const PORT = process.env.PORT || 8000

app.use(bodyParser.json())

app.get('/', (req, res) => {

})

app.get('/hierarchy', (req, res) => {
    try {
        const result = hierchy.hierchyBuilder()
        res.json(result) 
    } catch (error) {

    }
})

// app.use('/', require('./routes/ratings'))

app.listen(PORT, () => { console.log('Server is running on: ' + PORT) })