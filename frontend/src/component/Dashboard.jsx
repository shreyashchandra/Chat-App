import { useEffect, useMemo, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { io } from "socket.io-client";
import {
  Messageatom,
  Onlineusers,
  receivedatom,
  roomatom,
  roomnameatom,
  socketidatom,
} from "../../atoms";
import axios from "axios";

export function Dashboard() {
  const [messages, setMessages] = useRecoilState(Messageatom);
  const [socketid, setsocketid] = useRecoilState(socketidatom);
  const [room, setroom] = useRecoilState(roomatom);
  const [roomname, setroomname] = useRecoilState(roomnameatom);
  const [received, setreceivedmessage] = useRecoilState(receivedatom);
  const [Allusers, setAllusers] = useRecoilState(Onlineusers);


  const socket = useMemo(() => {
    return io("http://localhost:3000");
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      setsocketid(socket.id);
    });
    socket.on("availableusers",(c)=>{
      setAllusers(c)
    })
    socket.on("welcome", (message) => {
      console.log(message);
    });
    socket.on("received-message", (m) => {
      setreceivedmessage((data) => [...data, m]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-screen text-center bg-white flex ">
      <div className="w-4/12  left-0 h-full shadow-3xl">
        <Usercontainer></Usercontainer>
      </div>
      <div className="w-full border-l-2 border-gray-400">
        <div className="bg-[url(/a856b586153070160e616d035fff87fe.jpg)] bg-contain bg-repeat h-screen">
          <div className="text-3xl text-white font-semibold mb-12 pt-8">
            {socketid}
          </div>

          <Roomarea></Roomarea>
          <input
            className="border border-1 border-gray-300 text-gray-500 px-2 py-1 w-52 text-sm rounded-lg mx-2"
            onChange={(e) => {
              setroomname(e.target.value);
            }}
            value={roomname}
            placeholder="Enter your roomname"
          />
          <button
            className="bg-cyan-500 text-white w-16 rounded-lg"
            onClick={() => {
              socket.emit("room-joined", roomname);
              setroomname("");
            }}
          >
            Send
          </button>
          {received.map((m, i) => {
            return <div>{m}</div>;
          })}
        </div>
        <div className="fixed bottom-0 w-full flex h-16 items-center bg-white hover:bg-gray-300">
          {" "}
          <input
            className="w-2/3 h-full  hover:bg-gray-300 px-4  outline-none"
            onChange={(e) => {
              setMessages(e.target.value);
            }}
            value={messages}
            placeholder="Enter your message"
          ></input>
          <button
            className="w-1/12 h-10 text-md font-regular rounded-3xl mr-2 text-white bg-cyan-400  hover:bg-blue-700"
            onClick={() => {
              socket.emit("message", { messages, room });
              setMessages("");
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function Roomarea() {
  const setroom = useSetRecoilState(roomatom);

  return (
    <>
      <input
        className="border border-1 border-gray-300 text-gray-500 px-2 py-1 w-52 text-sm rounded-lg mx-2"
        onChange={(e) => {
          setroom(e.target.value);
        }}
        placeholder="Enter your room"
      />
    </>
  );
}

function Usercontainer() {
  const Allusers = useRecoilValue(Onlineusers);
  // useEffect(() => {
  //   setInterval(() => {
  //     async function getusers() {
  //       const res = await axios.get("http://localhost:3000/api/v1/getallusers");
  //       console.log(res.data);
  //       setAllusers(res.data.Onlineusers);
  //     }
  //     getusers();
  //   }, 10000);

    // async function getusers() {
    //   const res = await axios.get("http://localhost:3000/api/v1/getallusers");
    //   console.log(res.data);
    //   setAllusers(res.data.Onlineusers);
    // }
    // getusers();
  // }, []);
  return (
    <div className="h-screen w-full bg-gray-300 overflow-y-auto">
      <div className="pt-8">
        <input
          className="w-11/12 text-gray-700 bg-white px-4 py-1.5 text-md font-medium rounded-md outline-none"
          placeholder="Search User..."
        ></input>
      </div>
      <div className="w-full mt-4">
        {Allusers && Allusers.length > 0
          ? Allusers.map((user) => {
              return (
                <button className="w-11/12 h-16 hover:bg-cyan-500 hover:rounded-lg">
                  {user}
                </button>
              );
            })
          : ""}
      </div>
    </div>
  );
}
