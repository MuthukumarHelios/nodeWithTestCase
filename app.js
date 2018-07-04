
var app = require("express")()
var port = 3000




console.log("--your app running on ", port)

app.use(require("./routes/routes.js"))
app.listen(port)
module.exports = app