const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://admin:soni@cluster0.zvz87gg.mongodb.net/Chat-application")

const userschema=mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    gender:String,
    password:String
})

const User=mongoose.model("User",userschema);

module.exports={
     User
}