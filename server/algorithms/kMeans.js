const blogs = require('../datablog.json')
const Blog = require('../model/blog')
const Centroid = require('../model/centroid')

const kMeansClustering = () => {
    const centroids = []
    let ranges
    for (let i = 0; i < 4; i++) {
        ranges = Math.max(blogs.occurences[i])
        console.log('element: ', ranges);
    }
}
kMeansClustering()