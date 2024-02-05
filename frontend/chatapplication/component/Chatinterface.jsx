import { useState } from "react";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:3000");

export default function Chatarea() {
  const [message, setmessage] = useState("");
  const [username, setusername] = useState("");
  const [room, setroom] = useState("");

  const joinroom = () => {
    socket.emit(
      "joined_room",
      `User ${username} had joined the room : ${room}`
    );
    alert("room joined successfully.");
  };
  return (
    <>
      {" "}
      <h3>Join a Room</h3>
      <input
        type="text"
        placeholder="enter your message"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="enter the Room Id"
        onChange={(e) => {
          setroom(e.target.value);
        }}
      ></input>
      <br></br>
      <button onClick={joinroom}>Join the room</button>
    </>
  );
}
