const config = require('config');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {User} = require('../models/User');

router.post('/',async (req,res)=>{
    let user = User.findOne({email:req.body.email});
    if(!user) return res.status(400).send('invalid email');

    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if(!validPassword) return res.status(400).send('invalid password');

    const token = user.generateAuthToken();

    res.send(token);
  });
 

module.exports = router;