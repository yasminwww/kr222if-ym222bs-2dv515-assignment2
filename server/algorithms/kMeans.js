const blogs = require('../datablog.json')
const Blog = require('../model/blog')
const pearson = require('./pearson')
const Centroid = require('../model/centroid.js')

const kMeansClustering = (k) => {
    const centroids = []
    const wordCount = []
    // let ranges
    for (let c = 0; c < k; c++) {
        let aCentroid = new Centroid()
        for (let i = 0; i < pearson.getLength(); i++) {
            let range = wordRange(i)
            centroids.push(Math.floor( Math.random() * (wordRange(i).max - wordRange(i).min + 1)) + wordRange(i).min)
            aCentroid.assignyWordCount(i, Math.floor( Math.random() * (wordRange(i).max - wordRange(i).min + 1)) + wordRange(i).min)
        }
    }
    console.log(centroids.length)
}

const wordRange = (index) => {
    const range = []
    for (let i = 0; i < blogs.length; i++) {
        range.push(blogs[i].occurences[index])
    }
    const reducer = (accumulator, currentValue) => ({
        min: Math.min(accumulator.min, currentValue),
        max: Math.max(accumulator.max, currentValue)
    })
    return range.reduce(reducer, { min: Infinity, max: -Infinity })
}
kMeansClustering(1)