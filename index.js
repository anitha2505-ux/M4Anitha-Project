//requires
const express = require('express');
require('dotenv').config()
const { connect } = require('./db');
const cors = require('cors');
const { ObjectId } = require('mongodb');

//setup express
const app = express();

//app.use is to activate middleware
app.use(express.json());
app.use(cors());


//setup database
const mongoUri = process.env.MONGO_URI;
const dbName = "recipecatalogue";

//create routes
async function main() {
    try {
        const db = await connect(mongoUri, dbname);
        console.log('connected to mongodb');
        app.get('/', function(req,res){
        res.json({
        "message":"hello world"
    });
})
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}
main();

// Start server (do not put any lines after this line)
app.listen(3000, function(){
    console.log("Server has started");
})
