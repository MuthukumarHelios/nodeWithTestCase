var router = require("express").Router()
var await = require("await")
var c = require("../controlers/controler.js")
var m = require("../middlewares/middleware")
var async = require("async")
var mongoose = require("mongoose")
var db = require("../db.js")

mongoUrl = "mongodb://localhost:27017/ekaushalnsdc"
var multer = require("multer")({ dest: 'uploads/' })

router.use(m.log)


// Callback Method Warning Should not use at any Case developement
router.get("/find1",  (req, res) => {

 mongoose.connect(mongoUrl,(err, db) => {
   console.log("---db",db)
    if(err){
     res.json(err)
    return
  }
  db.collection('batch').find({}).toArray((er, result) => {
if(er) {
    res.json(er)
}
 res.json(result)
   return
 })
 })
})
router.post("/async/upload",  multer.any(),c.uploadFile)

// aync.waterFall Method Syncronise way of code handling
router.get("/async/waterfall/find",  (req, res) => {
   async.waterfall([
     (cb) => {
    dbConnect(cb)
    },
    (db, cb) => {
       findQuery(db, cb)
     }
   ],
   (err, result) => {
     if(err) {
       res.json(err)
     }
     res.json(result)
   })
})


// Normal Function For Aync waterfall
function dbConnect(cb) {
  mongoose.connect(mongoUrl,(err1, db) => {
    if(err1){
      cb(err1, null)
    }
  cb(null, db)
})
}

function findQuery(db, cb){
  db.collection('batch').find({}).toArray((err2, result) => {
      if (err2) {
        cb(err2, null)
      }
      cb(null, result)
  })
}

// Case to Follow
router.get("/async/await/find",c.findBatches)

module.exports = router
