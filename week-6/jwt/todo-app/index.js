const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/signup', (reqm ) => {

})



app.listen(3000, () => {
    console.log(`Sever is now running`);
})