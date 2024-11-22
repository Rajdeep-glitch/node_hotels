const mongoose = require ('mongoose');

// mongodb connection url
const mongoURL='mongodb://localhost:27017/Hotel' 

// set up mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true
    
})

// mongodb connection
const db = mongoose.connection;


db.on('connected',() =>{
    console.log ("connected to mongodb server");
})

db.on('disconnected',() =>{
    console.log ("disconnected to mongodb server");
})

db.on('error',(err) =>{
    console.log ("error to mongodb server",err);
})

//export database model
module.exports = db;
