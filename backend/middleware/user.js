require("dotenv").config();
const jwt = require("jsonwebtoken");

function usermiddleware(req,res,next){
    const token = req.headers.authorization;
    const jwttoken=token.split(" ")[1];
    try{
     const verification=jwt.verify(jwttoken,JWT_KEY);
     if (verification){
        req.email=verification.email;            //sending email to the headers for further use if needed.
        next();
     }
     else {
        res.json(500).json({
            message:"You are not authorized."
        })
     }
    }
    catch(e){
        res.status(400).json({
            message:"Something went wrong.",
            details:e
        })
    }
}


module.exports={
    usermiddleware
}