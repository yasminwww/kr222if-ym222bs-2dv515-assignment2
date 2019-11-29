const express = require('express') /* eslint-disable */
const bodyParser = require('body-parser')
const hierchy = require('./algorithms/hcluster')
const kMeans = require('./algorithms/kMeans')

const app = express()

const PORT = process.env.PORT || 8000

app.use(bodyParser.json())

app.get('/', (req, res) => {

})

app.get('/kmeans/:clusters', (req, res) => {
    try {
        const userCluster = Number(req.params.clusters)
        console.log('userCluster: ', userCluster);
        const result = kMeans(userCluster)
        res.json(result)
    } catch (error) {
        console.log('error: ', error);
    }
})

app.get('/hierarchy', (req, res) => {
    try {
        const result = hierchy.hierchyBuilder()
        res.json(result) 
    } catch (error) {
        console.log('error: ', error);
    }
})

// app.use('/', require('./routes/ratings'))

app.listen(PORT, () => { console.log('Server is running on: ' + PORT) })