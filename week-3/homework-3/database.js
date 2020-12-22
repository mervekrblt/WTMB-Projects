const fs = require('fs')

function save(filename, data){
    fs.writeFileSync(filename, JSON.stringify(data))
}

function load(data){
    return JSON.parse(fs.readFileSync(data))
}

module.exports = {save, load}