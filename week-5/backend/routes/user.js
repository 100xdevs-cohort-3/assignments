//  start writing your code from here

const express=require('express');
const router=express.Router();
const verifyJWT = require('../middleware/user');
const { signup, signin, logout } = require('../db/index.js');


router.post("/signup",signup);
router.post('/signin',signin);
router.get('/logout',verifyJWT,logout);

module.exports=router;