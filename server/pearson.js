const blogs = require('./datablog.json') /* eslint-disable */

// console.log(blogs[0].occurences.length)
const getLength = () => blogs[0].occurences.length
const getBlogWordCount = (index) => blogs[index].occurences
const getBlogObject = (index) => blogs[index] 

// Get root blog to map against