const express = require("express");
require("dotenv").config();
const { signupschema, signinschema } = require("../zod/user");
const { User } = require("../db/user");
const router = express.Router();
const jwt = require("jsonwebtoken");
const http = require("http");
const app = express();
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);



router.post("/signup", async (req, res) => {
  const userpayload = req.body;
  const parseuserpayload = signupschema.safeParse(userpayload);         //Parsing the data and validating the format of the data in the body
  
  try {
    if (parseuserpayload.success) {
      const finding_user_email = await User.findOne({                     //Checking if the email is already in used or not
        email: userpayload.email,
      });
  
      if (finding_user_email) {
        res.status(500).json({
          message: "Email already exists.",
        });
       
      } 
      else {
        await User.create({                                     //User creating function
          username: userpayload.username,     
          email: userpayload.email,
          gender: userpayload.gender,
          password: userpayload.password,
        });
        res.json({
          message: "User created successfully.",
        });
      }
    } else {
      res.status(500).json({
        message: "Invalid input. " + parseuserpayload.error.errors[0].message,            //to give specific information about the error.
      });
    }
  } catch (e) {
    res.status(401).json({
      message: "Internal Server error. Please try again later. " + e,
    });
  }
});

router.post("/signin", async (req, res) => {
  const userpayload = req.body;
  const parseuserpayload = signinschema.safeParse(userpayload);          //Parsing the data and validating the format of the data in the body
  console.log(parseuserpayload);
  try {
    if (parseuserpayload.success) {                                 
      const findinguser = await User.findOne({                        //Checking if the user exists in the DB or not
        email: userpayload.email,
        password: userpayload.password,
      });
      if (findinguser) {                                              
        const token = jwt.sign(                                      //Assigning the jwt token to the verified user
          { email: userpayload.email },                             
          process.env.JWT_KEY
        );
        res.json({
          token: token,
          message:"Signed in successfully"
        });
      } else {
        res.status(400).json({
          message: "User does not exist",
        });
      }
    } else {
      res.status(500).json({
        message: "Invalid input. " + parseuserpayload.error.errors[0].message,
      });
    }
  } catch (e) {
    res.status(401).json({
      msg: "Something went wrong, Please try again later.",
      details: e,
    });
  }
});

module.exports = router;
