const blogs = require('../datablog.json')
const Blog = require('../model/blog')
const pearson = require('./pearson')
const Centroid = require('../model/centroid.js')

const kMeansClustering = (iterate) => {
    const centroids = []
    // let ranges
    for (let i = 0; i < iterate; i++) {
        let aCentroid = new Centroid()
        for (let i = 0; i < pearson.getLength(); i++) {
            let min = Math.min(...blogs[i])
            console.log('min: ', min);
            // let range = wordRange(i)
        }
    }
}

const wordRange = (index) => {
    const range = []
    for (let i = 0; i < blogs.length; i++) {
        const value = blogs[i].occurences[index]
        // const 
    }
}
kMeansClustering(4)