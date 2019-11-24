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
    data.split('\n')
      .map((el) => {
        return el.split('\t')
      }).map((line, i) => {
        const blogName = line[0].replace(/[^A-Za-z]/g, '')
        console.log(blogName)
        // const toNumber = 
        blogsArr.push({
          blogName: blogName,
          occurences: line.filter((number) => {
            if (Number(number)) {
              return number
            }
          }).map(Number)
        })
        return line
      })
    return blogsArr.filter(rows => rows.occurences.length !== 0)
  }).then(result => {
    fs.writeFile('datablog.json', JSON.stringify(result, null, 4), 'utf8', (err) => {
      if (err) console.error(err) // incase of an error, print it
      console.log('Successfuly created a JSON file out of the .txt')
    })
  })
  .catch(error => console.log('Error: ', error))
