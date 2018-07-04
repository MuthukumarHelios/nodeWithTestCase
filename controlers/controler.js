
var dal = require("../dal/dal")

exports.findBatches = async (req, res) => {
    try {
        var result =  await dal.findBatch()
        res.json(result) 
        return
    }catch(ex) {
         res.json(ex.message)
         return
    }
}