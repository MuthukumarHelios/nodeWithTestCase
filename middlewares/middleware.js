
exports.log = (req, res, next) => {
    console.log("--middleware-----------")
    next()
}
