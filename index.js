const express = require('express');
const cors = require('cors');

let app = express();
app.use(cors());

//add routes here

app.get('/echo', (req,res) => {
    // get all query parameters
    const queryParams = req.query;

    // get a response object
    const response = {
        message: "Here are the query parameters you sent";
        firstName: queryParams.firstName,
        lastName: queryParams.lastName
    };

    // send the response as JSON
    res.json(response);
});

app.get('/hello/:name', (req,res) => {
    let name = req.params.name;
    res.send("Hi " + name);
})

app.get('/', function(req,res){
    res.json({
        "message": "hello world"
    });
})

app.listen(3000, ()=> {
    console.log("Server Started")
})
