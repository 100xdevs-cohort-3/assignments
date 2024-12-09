//track of per sec request send


// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require('express');
const { use } = require('./rateLimiterMidWare');
const app = express();

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second



//every sec it reinitialize tthis empty object 
let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};  //it will empty the request
}, 1000)




//global middleware
app.use(function(req,res,next){
    const userId=req.headers["user-id"];
    if(numberOfRequestsForUser[userId]){  //check if it initialized or not if not then init with 1
        numberOfRequestsForUser[userId]=numberOfRequestsForUser[userId]+1;
        if(numberOfRequestsForUser[userId]> 5){   //it will check if the request is more than 5 then give that msg else pass to the middleware
            res.status(404).send("no entry");

        }else {
            next();
        }
    }
    else {
        numberOfRequestsForUser[userId]=1;
        next();
    }
    
})



app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});


app.listen(3000);
module.exports = app;