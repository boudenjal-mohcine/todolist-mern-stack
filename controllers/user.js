const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config({ path: "../.env" });


exports.signup = (req,res,next) => {

  bcrypt.hash(req.body.password,10).then((hash)=>{

    const user = new User({

      email : req.body.email,
      password : hash

    });

    user.save().then(()=>{
      res.status(201).json({
        message : "user added successfully"
      }).catch(()=>{
        res.status(401).json({
          error : "user not added"
        })
      })
    })

  }).catch(()=>{
    console.log("hashing error");
  })


}


exports.login = (req,res,next) => {

  User.findOne({ email: req.body.email }).then((user) => {
    //check if we got user or not
    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
    }
    //if we got the user , then we compare passwords
    bcrypt
      .compare(req.body.password, user.password)
      .then((valid) => {
        //if password not correct
        if (!valid) {
          return res.status(401).json({
            error: "Incorrect password!",
          });
        }
        //if the password is correct
        const token = jwt.sign({ userId:user._id },process.env.JWT_RANDOM_STRING,{expiresIn:'24h'})
        res.status(200).json({
          userId: user._id,
          token,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
        });
      });
  });
}