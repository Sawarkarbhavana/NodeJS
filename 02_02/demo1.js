var fs = require('fs')

fs.readFile = ('./data1.json', (err,data) => {

    console.log(data)
})