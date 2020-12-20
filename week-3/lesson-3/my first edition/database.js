const fs = require('fs')
module.exports = {save, load}

function save(filename, data){
    fs.writeFile(filename, JSON.stringify(data))
}

function load(filename, callback){
    fs.readFile(filename, 'utf-8', (err, file) => {
        if(err){
            console.log('There is a read error')
            callback(err)  
            return //stop runing code
        }
        callback(null, JSON.parse(file))
    })
}