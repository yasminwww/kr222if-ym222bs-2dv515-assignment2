const blogs = require('../datablog.json')
const { getRandomRoot, pearson } = require('./pearson')
const Cluster = require('../model/Cluster')
const Blog = require('../model/blog')

/**
 * 
 * @param {number} index, array contains other arrays, every array holds (blog name) and (word occurences)
 * blogname: ____
 * occurences: [3, 5, 20, etc...]
 */
const clusterifyBlogs = (index) => {
    try {
        const rootBlog = blogs[index]
        const correlationResult = [{ 
            rootBlogName: rootBlog.blogName, 
            occurences: rootBlog.occurences
        }]

        const filteredList = blogs.filter(e => e.blogName !== rootBlog.blogName)

        for (let i = 0; i < filteredList.length; i++) {
            const currentBlog = filteredList[i]
            //  loop through every pair looking for the smallest distance
            
            const result = pearson(rootBlog.occurences, currentBlog.occurences)
            

            correlationResult.push({ 
                blogName: currentBlog.blogName, 
                occurences: currentBlog.occurences, 
                correlation: result 
            })
        }
        
        return correlationResult

    } catch (err) {
        console.error(err)
    }
}


const arrayOfClusters = () => {
    try {
        let clusterArray = []
        let currentClustID = -1

        for (let i = 0; i < blogs.length; i++) {
            clusterArray.push(new Cluster({
                blog:blogs[i].blogName,
                vec: blogs[i].occurences,
                id: i
            }))
        }
        console.log(clusterArray)
    
        // while (clusterArray.length > 0) {
        //     let pair = [0, 1]
        //     let closest =  pearson(clusterArray[0].vec, clusterArray[1].vec)
            
        //     for (let i = 0; i < closest.length; i++) {

        //     }
        // }
        return clusterArray
    } catch (err) {
        console.error(err)
    }
}
arrayOfClusters()
const findClosest = async () => {
    const result = arrayOfClusters()
}


module.exports.getCorrelation = clusterifyBlogs

