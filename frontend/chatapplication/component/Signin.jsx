import { useState } from "react";

export default function Signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");

  return (
    <>
     {/* Email of the user */}
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      ></input>
      <br></br>
           {/* password of the user */}

      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      ></input>
      <br></br>

      {/* To give the Error message */}
      {message.includes("successfully")==true ? ( <p style={{color:"green"}}>{message}</p>) : ( <p style={{color:"red"}}>{message}</p>) }
     
     
      
      <button
        onClick={() => {
          fetch("http://localhost:3000/user/signin", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async (res) => {
            const json=await res.json();
            setmessage(json.message);   
          });
        }}
      >
        {" "}
        Sign in
      </button>
    </>
  );
}
