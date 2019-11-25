const blogs = require('../datablog.json') /* eslint-disable */

// console.log(blogs[0].occurences.length)
const getLength = () => blogs[0].occurences.length
const getBlogWordCount = (index) => blogs[index].occurences
const getBlogObject = (index) => blogs[index]

const pearson = (blogA, blogB) => {
    let sumA = 0
    let sumB = 0
    let sumAsq = 0
    let sumBsq = 0
    let pSum = 0
    let n = getLength()
    let inCommon = 0

    for(let i = 0; i < getLength(); i++) {
        let cntA = blogA[i]
        let cntB = blogB[i]
        sumA += cntA
        sumB += cntB
        sumAsq += cntA** 2
        sumBsq += cntB** 2
        pSum += cntA * cntB
        inCommon += 1
    }
    if (inCommon === 0) {
        return 0
    }
        let num = pSum - (sumA*sumB / n)
        let dem = Math.sqrt((sumAsq - sumA**2 / n) * (sumBsq - sumB**2 / n))
        let result = 1 - num/dem
        if (!Number(result)) {
            return 0
        }
        return result
}

    // pearson(getBlogWordCount(0), getBlogWordCount(1))

/**
 * TODO: 
 * Use classes ? 
 * 
 */
const merge = (clusterA, clusterB, distance) => {
    let n = getLength()
    let P = new Cluster()

    // Parent to both A,B is the new class P
    clusterA.parent = P
    clusterB.parent = P

    // Children to P
    P.left = clusterA
    P.right = clusterB

    // Use A "BLOG" here
    let nB = new Blog()
    for(let i = 0; i < n; i++) {
        // TODO: change blog entries
        let cntA = getBlogWordCount(0)[i]
        let cntB = getBlogWordCount(1)[i]
        
        let cnt = (cntA + cntB) / 2

        nB.setWordCount(i, cnt)
        P.blog = nB
        P.distance = distance

    }
    return P
}


    // -----------  Helper, random root :)
const getRandomRoot = () => {
let oneRandomBlogObject = blogs[Math.floor(Math.random()*blogs.length)]
// Or simply return the random array
return oneRandomBlogObject
// return blogs.indexOf(oneRandomBlogObject)
}


module.exports.getRandomRoot = getRandomRoot
module.exports.merge = merge
module.exports.pearson = pearson
module.exports.getBlogObject = getBlogObject
module.exports.getBlogWordCount = getBlogWordCount
module.exports.getLength = getLength
