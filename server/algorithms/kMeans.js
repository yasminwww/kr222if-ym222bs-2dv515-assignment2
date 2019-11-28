const blogs = require('../datablog.json')
const pearson = require('./pearson')
const Centroid = require('../model/centroid.js')

const kMeansClustering = (k) => {
    const centroids = []
    // let ranges
    for (let c = 0; c < k; c++) {
        let aCentroid = new Centroid()
        for (let i = 0; i < pearson.getLength(); i++) {
            let range = wordRange(i)
            aCentroid.assignyWordCount(i, Math.floor( Math.random() * (range.max - range.min + 1)) + range.min)
        }
        centroids.push(aCentroid)
    }
    for (let i = 0; i < 20; i++) {
        centroids.forEach(c => {
           c.clearAssigny() 
        })
        blogs.forEach(blog => {
            let distance = Number.MAX_VALUE
            let best = new Centroid()
            centroids.forEach(c => {
                const cDist = pearson.pearson(c.wordCount, blog.occurences)
                if (cDist < distance) {
                    best = c
                    distance = cDist
                }
            })
            best.assignifyBlog(blog)
        })
        centroids.forEach(centroid => {
            for (let i = 0; i < pearson.getLength(); i++) {
                let avg = 0
                centroid.assignments.forEach(b => {
                    avg += b.occurences[i]
                    avg /= centroid.assignments.length
                    centroid.updateifyCounter(i, avg)
                })
            }
        })
    }
    return centroids
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


module.exports.kMeansClustering = kMeansClustering
