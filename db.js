
var mongoose = require("mongoose")

mongoUrl = "mongodb://localhost:27017/ekaushalnsdc"
console.log("-your db connectedto", mongoUrl)

exports.connectMongo = async () => {
    return await mongoose.createConnection(mongoUrl)
  }
  
  