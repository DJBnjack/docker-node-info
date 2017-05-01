var express = require('express')
var app = express()

let port = 5000;
if (process.argv.length >= 3)
    port = parseInt(process.argv[2]);

let message = "world";
if (process.argv.length >= 4)
    message = process.argv[3];


app.get('/', function (req, res) {
    let ret = "<html>\n"
    ret += "<body>\n"
    ret += "  <h1>Hello, " + message + "!</h1>\n"
    ret += "  <h3>This is my environment:</h3>\n"
    ret += "  <table>\n"
    ret += "    <tr><th>Key</th><th>Value</th></tr>\n"

    Object.keys(process.env).forEach(function (key) {
        ret += "    <tr><td>" + key + "</td><td>" + process.env[key] + "</td></tr>\n"
    });

    ret += "  </table>\n"
    ret += "</body>\n"
    ret += "</html>\n"
    res.send(ret)
})

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!')
})
