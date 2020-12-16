const fs = require('fs')
module.exports = {save, load}

function save(filename, data){
    fs.writeFileSync(filename, JSON.stringify(data))
}

function load(filename){
    return JSON.parse(fs.readFileSync(filename, 'utf-8'))
}