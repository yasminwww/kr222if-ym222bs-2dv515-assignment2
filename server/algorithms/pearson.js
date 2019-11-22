const blogs = require('../datablog.json')
const { sortByKey, addNames } = require('./euclideanAlgo')
const { USER_ID, MOVIE } = require('./types')
console.log(blogs[0].length)

const pearson = (userA, userB) => {
    // Initialize variables
    let sumOne = 0
    let sumTwo = 0
    let sum1sq = 0
    let sum2sq = 0
    let pSum = 0
    let n = 0  // array.length
  
    for (const rootUser of userA) {
      for (const currentUser of userB) {
        if (rootUser.Movie === currentUser.Movie) { // if its same movie
          sumOne += Number(rootUser.Rating) // sum ratings for user A
          sumTwo += Number(currentUser.Rating) // sum ratings for user B
  
          sum1sq += Number(rootUser.Rating) ** 2 // sum of squared rating for user A
          sum2sq += Number(currentUser.Rating) ** 2 // sum of squared rating for user B
  
          pSum += Number(rootUser.Rating) * Number(currentUser.Rating) // product of ratings from A and B
          n += 1 // number of ratings in commong between A and B
        }
      }
    }
    if (n === 0) {
      return 0 // nothing in common, return 0
    }
  
    const num = pSum - (sumOne * sumTwo / n)
    const den = Math.sqrt((sum1sq - sumOne ** 2 / n) * (sum2sq - sumTwo ** 2 / n))
    return num / den
  }

