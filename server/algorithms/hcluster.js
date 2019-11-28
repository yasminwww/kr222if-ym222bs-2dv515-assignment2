const blogs = require('../datablog.json')
const {getRandomRoot, pearson} = require('./pearson')
const Cluster = require('../model/cluster')


const getCorrelation = (index) => {
    const rootBlog = blogs[index]
    const correlationResult = [{rootBlogName: rootBlog.blogName, occurences: rootBlog.occurences}]

    const filteredList = blogs.filter(e => e.blogName !== rootBlog.blogName)

    for (let i = 0; i < filteredList.length; i++) {
        const currentBlog = filteredList[i];
        const result = pearson(rootBlog.occurences, currentBlog.occurences)
        
        correlationResult.push({blogName: currentBlog.blogName, occurences: currentBlog.occurences , correlation: result})
    }
    // console.log('correlationResult: ', correlationResult);
    return correlationResult
}


// Nästa steg: 
const merging = () => {
    let arrayOfClusters = []
    let cnt = 0
    for (let i = 0; i < blogs.length; i++) {
        for(let j = 0; j < blogs.length; j++){
            console.log(blogs[j].occurences)
            // Check to not loop the same twice
            let cntA = blogs[i].occurences
            let cntB = blogs[j].occurences
            cnt = (cntA + cntB) / 2
            // arrayOfClusters.push({cnt: cnt, blogname: blogs[i].blogName, blogname2: blogs[j].blogName})
        }
        
        // console.log(cnt)
        // console.log(arrayOfClusters)
    }
    const res = getCorrelation()
    

}
merging()


module.exports.getCorrelation = getCorrelation
n = getCorrelation
n = getCorrelation
n = getCorrelation
n = getCorrelation
n = getCorrelation
n = getCorrelation
n = getCorrelation
n = getCorrelation
n = getCorrelation
n = getCorrelation
