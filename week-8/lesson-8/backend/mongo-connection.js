const mongoose = require('mongoose')

async function main (){
    try{
      await mongoose.connect(
          process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost/wtm",
        { useUnifiedTopology: true, useNewUrlParser: true }
  );
    console.log(`connected`)  
    }
    catch{
        console.log("error detected")
    }
}

main()