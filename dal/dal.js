

var mongodbInstance = require("../db.js")


exports.findBatch = async () => {
    var db = await mongodbInstance.connectMongo()
    batchCollection = db.collection('batch')
    return await batchCollection.find({}).toArray()
}
