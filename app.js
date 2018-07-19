
var express = require("express"),
app = express();
var port = 4000
var path = require("path")

app.use('/static', express.static(path.join(__dirname)))


console.log("--your app running on ", port)

app.get("/test/docker", (req, res) => {
    res.json("wow Docker is running")
})

app.use(require("./routes/routes.js"))
app.listen(port)
module.exports = app