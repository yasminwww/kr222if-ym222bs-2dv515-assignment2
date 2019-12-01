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
 * @param {object} aCentroid
 */
const compairCurrentAndPrevoius = (aCentroid) => {
    let itsTrue = false
    for (let i = 0; i < aCentroid.assignments.length; i++) {
        itsTrue = aCentroid.isSame(i)
        if (itsTrue === false) {
            return false
        }
    }
    return itsTrue
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
        /**
         * when every centroid have same amount of blogs in both assignment and previous, iterate every index of the blog (compareCurrentAndPrevious)
         */
        // const isStable = centroids.every(centroid => {
        //     if (centroid.assignments.length === centroid.previous.length) { // varför blir denhär aldrig sant ibland?
        // 
        //         console.log('compairCurrentAndPrevoius(centroid): ', compairCurrentAndPrevoius(centroid));
        //         return compairCurrentAndPrevoius(centroid)
        //     } else {
        //         return false;
        //     }
        // })
        // console.log('isStable: ', isStable);
        // if (isStable) {
        //     break
        // }
    }
   
    return centroids
}

// kMeansClustering(3)



module.exports = kMeansClustering
