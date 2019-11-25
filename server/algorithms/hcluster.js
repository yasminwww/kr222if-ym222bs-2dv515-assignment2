const blogs = require('../datablog.json')
const {getRandomRoot, pearson} = require('./pearson')
const Cluster = require('../model/cluster')


const getCorrelation = (index) => {
    const rootBlog = blogs[0]
    console.log('rootBlog: ', rootBlog.occurences.length);
    const correlationResult = [{rootBlogName: rootBlog.blogName, occurences: rootBlog.occurences}]

    const filteredList = blogs.filter(e => e.blogName !== rootBlog.blogName)

    for (let i = 0; i < filteredList.length; i++) {
        const currentBlog = filteredList[i];
        const result = pearson(rootBlog.occurences, currentBlog.occurences)
        
        correlationResult.push({blogName: currentBlog.blogName, occurences: currentBlog.occurences , correlation: result})
    }
    return correlationResult
}


// Nästa steg: 
const merging = () => {
    let arrayOfClusters = []
    for (let i = 0; i < blogs.length; i++) {
        const result = getCorrelation(i);
    }
    const res = getCorrelation()
    

}
merging()


module.exports.getCorrelation = getCorrelation

