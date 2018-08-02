/* eslint-disable */

const express= require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const morgan= require('morgan');

console.log('yo bois');
const app=express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.post('/register' , (req,res) =>{
  res.send( {
    message: `${req.body.email} has been registered`
  });
} )
app.listen(process.env.PORT || 8081);
