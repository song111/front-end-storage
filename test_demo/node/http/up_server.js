var http = require('http')

module.exports = http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.end("hello world")
})