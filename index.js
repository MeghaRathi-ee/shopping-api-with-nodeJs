const config = require('config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const categories = require('./routes/categories');
const users = require('./routes/users');
const products = require('./routes/products');
const logins = require('./routes/logins')

if (!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR : jwtPrivateKey is not defined');
    process.exit(1);
}

app.use(express.json());
app.use('/api/categories',categories);
app.use('/api/users',users);
app.use('/api/products',products);
app.use('/api/logins',logins);




mongoose.connect('mongodb://localhost/new',(err,data)=>{
    if(err){
        console.log(err);
        console.log('database not connected')
    }else{
        console.log('database connected')
    }
})

app.listen(8000,()=>{
    console.log('server started')
})