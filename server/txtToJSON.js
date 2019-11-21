const fs = require('fs')
const file = './blogdata.txt'

const getData = (fileName, type) =>
  new Promise((resolve, reject) =>
    fs.readFile(fileName, type, (err, data) => {
      return err ? reject(err) : resolve(data)
    })
  )

getData(file, 'utf8')
  .then(data => {
    const blogsArr = []
    const blogsObj = {}
    const cells = data.split('\n')
      .map((el) => {
        return el.split('\t')
      }).map((line, i) => {
        const blogName = line[0].replace(/[^A-Za-z]/g, '')
        blogsArr.push({
          blogName: blogName,
          occurences: line.filter((number) => {
            if (Number(number)) {
              return number
            }
          })
        })
        return line
      })
      console.log(blogsArr[1])
  })
  .catch(error => console.log('Error: ', error))
