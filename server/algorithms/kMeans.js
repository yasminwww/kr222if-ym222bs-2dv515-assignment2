const blogs = require('../datablog.json')
const pearson = require('./pearson')
const Centroid = require('../model/centroid.js')


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

/**
 * Ass = assignment
 * @param {object} aCentroid
 */
const compairCurrentAndPrevoius = (aCentroid) => {
    let itsTrue = false
    // for (let i = 0; i < aCentroid.assignments.length; i++) {
        aCentroid.assignments.map((e, i) => {
            console.log('i: ', i);
            itsTrue = aCentroid.isSame(i)
            console.log('itsTrue: ', itsTrue);
        })
        console.log(itsTrue);
    // }
}

const kMeansClustering = (k, userChoice) => {
    const centroids = []
    if (userChoice === '' || userChoice === undefined) {
        userChoice = Number.MAX_VALUE
    }
    for (let c = 0; c < k; c++) {
        let aCentroid = new Centroid()
        for (let i = 0; i < pearson.getLength(); i++) {
            let range = wordRange(i)
            aCentroid.assignyWordCount(i, Math.floor( Math.random() * (range.max - range.min + 1)) + range.min)
        }
        centroids.push(aCentroid)
    }
    for (let i = 0; i < 2; i++) {
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
        centroids.map(centroid => {
            if(centroid.assignments.length === centroid.previous.length) {
                if (compairCurrentAndPrevoius(centroid)) {
                    console.log('yes its true')
                    return centroids
                }
            }
        })

    }
   
    return centroids
}

kMeansClustering(1)



module.exports = kMeansClustering
