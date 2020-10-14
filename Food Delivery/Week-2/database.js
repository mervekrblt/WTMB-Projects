const fs = require('fs')

//take data and write them as a string into filename 
const save = (filename, data) => {
    fs.writeFileSync(filename, JSON.stringify(data))
}

const load = (filename) =>{
    return JSON.parse(fs.readFileSync(filename,'utf8'))
}

module.exports={save, load}