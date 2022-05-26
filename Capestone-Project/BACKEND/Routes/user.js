const express = require('express')
const User = require('../models/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require('mongoose');


const router = express.Router();

const newUser = mongoose.model("signupdata",User)
router.post("/signup", async (req, res, next) => {
  console.log(req.body);
  try{
    const salt = await bcrypt.genSalt()
    hashedPass= await bcrypt.hash(req.body.pass,salt)
    console.log(hashedPass);

    const data ={
      name:req.body.name,
      email:req.body.email,
      pass:req.body.password,
      count:1
    }
    const loginUser = new newLoginUser(data);
    await loginUser.save()
    res.send(data);
  }
  catch{
    res.status(500).send("Error");
  }
    
      
    });
   
  
  router.post("/login", (req, res, next) => {
    let fetchedUser;
  
    User.findOne({email:req.body.email}).then(user=>{
      if(!user){
        return res.status(401).json({
          message: "Auth failed no such user"
        })
      }
      fetchedUser=user;
      return bcrypt.compare(req.body.password, user.password);
    }).then(result=>{
      if(!result){
        return res.status(401).json({
          message: "Auth failed inccorect password"
        })
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(e=>{
     
      console.log(e)
    
    })
  })
module.exports = router