//1. setup express
const express = require('express');
const cors = require('cors');

//1a. create the app 
const app = express();
app.use(express.json())

//2. create routes
app.get('/', function(req,res){
    res.json({
        "message":"hello world"
    });
})

// 3. Start server (do not put any lines after this line)
app.listen(3000, function(){
    console.log("Server has started");
})