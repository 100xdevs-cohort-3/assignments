// Create a middleware function that 
// logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require("express");

const app = express();

function getinfo(req, res, next) {
    res.json({
        method: req.method,
        url: req.url,
        timestamp: new Date().toISOString(),
    })
}

app.use(getinfo)

// No app.get is defined and the request was ended by the middleware itself.


app.listen(3000);