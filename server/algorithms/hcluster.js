const blogs = require('../datablog.json')
const {getRandomRoot, pearson} = require('./pearson')


const getCorrelation = () => {
    const randomRoot = getRandomRoot()
    const correlationResult = [{currentBlog: randomRoot.blogName}]

    const filteredList = blogs.filter(e => e.blogName !== randomRoot.blogName)

    for (let i = 0; i < filteredList.length; i++) {
        const currentBlog = filteredList[i];
        const result = pearson(randomRoot.occurences, currentBlog.occurences)
        
        correlationResult.push({blogName: currentBlog.blogName, correlation: result})
    }
    // console.log('correlationResult: ', correlationResult)
    return correlationResult
}
getCorrelation()


// Nästa steg: 
const z



module.exports.initialize = initialize
