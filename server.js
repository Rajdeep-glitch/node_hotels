const express = require('express');
const app = express();
const db = require('./db');


const bodyParser = require ('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hey there, Welcome to my hotel')
})

const PersonRoutes= require ('./Routes/PersonRoutes');
const MenuItemsRoutes= require ('./Routes/MenuItemsRoutes');

app.use('/person', PersonRoutes);
app.use('/menu', MenuItemsRoutes);


app.listen(3000,()=>{
  console.log('listening to server 3000')
})