const mongoose = require('mongoose');

//define the mongodb connection url
const mongoURL =  'mongodb://127.0.0.1:27017/hotels'//replace hotel with ur database name
// const mongoURL =  'mongodb+srv://gauravraj5724:Gaurav123@hotel.j2mxrmx.mongodb.net/' 
//set up mongodb connection
mongoose.connect(mongoURL,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');
})

db.on('error',(err)=>{
    console.error('connected to mongodb server',err);
})
db.on('disconnected',()=>{
    console.log('disconnected to mongodb server');
})

module.exports = db;