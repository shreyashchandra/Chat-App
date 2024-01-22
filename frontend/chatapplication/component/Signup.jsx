import { useEffect, useMemo, useState } from "react";

export default function Signup() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  // const [age, setage] = useState(0);
  const [gender, setgender] = useState("");
  // const [phonenumber, setphonenumber] = useState(0);
  const [password, setpassword] = useState("");
  const [Message,setmessage]=useState("")

  return (
    <>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      ></input>
      <br></br>

      {/* <input
        type="number"
        placeholder="Enter age"
        onChange={(e) => {
          setage(e.target.value);
        }}
      ></input>
      <br></br> */}

      <input
        type="text"
        placeholder="Enter gender"
        onChange={(e) => {
          setgender(e.target.value);
        }}
      ></input>
      <br></br>
{/* 
      <input
        type="number"
        placeholder="Enter phonenumber"
        onChange={(e) => {
          setphonenumber(target.value);
        }}
      ></input>
      <br></br> */}

      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      ></input>
      <br></br>
     
      <p style={{color:"red"}}>{Message}</p>
      <br></br>
      <button
        onClick={() => {
          fetch("http://localhost:3000/user/signup", {
            method: "POST",
            body: JSON.stringify({
              username: username,
              email: email,
              
              gender: gender,
             
              password: password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async (res) => {
            const json = await res.json();
            // console.log(json);
            setmessage(json.message)
          });
        }}
      >
        Sign up
      </button>
      
    </>
  );
}
