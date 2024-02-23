require("dotenv").config();
const express = require("express");
const app = express();
const { Router } = require("express");
const userroute = require("./route/user");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);
let Allusersarray=[];

//Allowing the request made by the frontend
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

//Socket.io part
io.on("connection", (socket) => {
  Allusersarray.push(socket.id);
  socket.emit("availableusers",Allusersarray)
  console.log("user is now connected : ", socket.id);

  socket.emit("welcome", `welcome to the server users`);
  
  socket.on("message", (m) => {
    io.to(m.room).emit("received-message",m.messages);
  });
  socket.on("room-joined",(r)=>{
    socket.join(r)
    console.log(`User had joined the room ${r}`)

  })
  socket.on("disconnect", () => {
    Allusersarray.splice(Allusersarray.indexOf(Allusersarray.find((key)=>{key==socket.id})),1)
    console.log("User disconnected");
  });
});

//To parse all the data that has been imported through router
app.use(bodyParser.json());

app.use("/api/v1", userroute);

app.get("/api/v1/getallusers",async (req,res)=>{
  
  res.json({
    Onlineusers:Allusersarray
  })
})

server.listen(process.env.PORT, () => {
  console.log(`Example app listening on ${process.env.PORT}`);
});
