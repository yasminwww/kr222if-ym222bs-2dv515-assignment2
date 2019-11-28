const blogs = require('../datablog.json')
const Blog = require('../model/blog')
const pearson = require('./pearson')
const Centroid = require('../model/centroid')

const kMeansClustering = (iterate) => {
    const centroids = []
    let ranges
    for (let i = 0; i < iterate; i++) {
        let aCentroid = new Centroid()
        for (let i = 0; i < pearson.getLength(); i++) {
            
        }
    }
}

const wordRange = () => {
    const 
    for (let i = 0; i < blogs.length; i++) {

    }
}
kMeansClustering(4)