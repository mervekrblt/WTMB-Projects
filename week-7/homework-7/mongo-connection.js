const mongoose = require('mongoose')

async function main(){
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING ||'mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true })
    console.log('connected')
}

main()