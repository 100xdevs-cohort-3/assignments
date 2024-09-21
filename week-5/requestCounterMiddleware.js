const express = require('express')
const app = express();

let requestCount = 0;
const increaseRequestCount = (req, res, next) => {
    requestCount += 1;
    res.json(`Total Requests: ${requestCount}`)
}

app.use(increaseRequestCount);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is now running on ${port}`)
})