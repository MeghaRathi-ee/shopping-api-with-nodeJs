const jwt = require('jsonwebtoken');
const config = require('config');
const _ = require('lodash');
const bcrypt = require('bcrypt')
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {User, validate} = require('../models/User');

router.get('/',async (req,res)=>{
    const users = await User.find().sort('name');
    res.send(users);
  })

router.post('/',async (req,res)=>{

    //let user = User.findOne({email:req.body.email});
    //if(user) return res.status(400).send('User is already registered');

    user = new User(_.pick(req.body, ['name','email','password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);

    await user.save();
    const token = user.generateAuthToken();
    res.header('x-login-token',token).send(_.pick(user,['_id','name','email']));
  });

module.exports = router;