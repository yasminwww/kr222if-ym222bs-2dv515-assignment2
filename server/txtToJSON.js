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

    const cells = data.split('\n') // split by linebreak
    .map(el => {
        if (el === 'Blog') {
            console.log("blog found")
        }
        return el.split()   // DO SOMETHING HERE
    })
    //console.log(cells)
    // const headings = cells.shift()
    // console.log(headings)
    // for(let values of cells) {
    //     for(let element of headings) {
    //         console.log('cells:  ', values)
    //         console.log('headings:  ', element)
    //     }
    // }

    // let array = cells.map(el => {
    //     let obj = {}
    //     for (let i = 0, l = el.length; i < l; i++) {
    //       obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i]
    //     }
    //     return obj
    //   })
    //   let json = fs.writeFileSync('jsons.json', JSON.stringify(array,  null, '\t'))
     
    //   console.log('Data: ', array)
    // console.log(headings)
    console.log(cells)
    })
  .catch(error => console.log('Error: ', error))

