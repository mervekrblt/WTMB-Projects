const fs = require('fs');

exports.save = person =>{
    fs.writeFileSync('./data.json', JSON.stringify(person))
}

exports.load = () =>{
   return fs.readFileSync('./data.json', 'utf8')
}