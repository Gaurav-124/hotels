const express = require('express')
const app = express();
const db = require('./db1')

const bodyParser =require('body-parser');
app.use(bodyParser.json());


const Menu = require('./Models/Menu');

app.get('/', function(req,res){
    res.send('welcome to our hotel...')
})

const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes);

app.listen(3000,()=>{
    console.log('listening on port 3000');
}) 
