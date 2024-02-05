require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http"); // Added this line
const { Router } = require("express");
const userroute = require("./route/user");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");
const server = http.createServer(app);

//Allowing the request made by the frontend
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

//Socket.io part
io.on("connection", (socket) => {
  console.log("user is now connected : ", socket.id);

  socket.on("joined_room", (message) => {
    console.log(
      `User with the user id ${socket.id} had connected with the room successfully.`
    );
    io.emit("joined_room", message);
  });
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

//To parse all the data that has been imported through router
app.use(bodyParser.json());

app.use("/user", userroute);

server.listen(process.env.PORT, () => {
  console.log(`Example app listening on ${process.env.PORT}`);
});
