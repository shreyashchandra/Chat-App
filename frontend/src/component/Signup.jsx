import { useState } from "react";
import { Inputbox } from "./Inputbox";
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [email, setemail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const navigate=useNavigate();


  return (
    <div className="bg-white w-full h-screen overflow-y-auto ">
      <div className="grid grid-cols-4 md:grid-cols-9 w-full h-full items-center ">
        <div className="col-span-0 md:col-span-3 ">
          <img className="w-full h-screen z-0" src="a856b586153070160e616d035fff87fe.jpg"></img>
        </div>
        <div className="col-span-4 md:col-span-3 flex justify-center ">
          <div className="w-11/12 h-[26rem] rounded-xl shadow-3xl bg-[url('/download (1).jpg')]">
            <div className="text-center p-5 leading-tight ">
              <h1 className="text-xl text-black md:text-3xl font-bold">
                Signup
              </h1>
              <p className="font-normal text-xs md:text-base text-gray-700 pt-2 ">
                {" "}
                Enter your information to create your account
              </p>
            </div>
            <div>
              <p className=" pb-1 ml-5 font-semibold text-xs text-black ">
                Username
              </p>
              <Inputbox
                placeholder="Enter your email"
                type="text"
                setvalue={setemail}
              />

              <p className="pt-2 pb-1 ml-5 font-semibold text-xs text-black ">
                Firstname
              </p>
              <Inputbox
                placeholder="Enter your firstname"
                type="text"
                setvalue={setfirstname}
              />

              <p className="pt-2 pb-1 ml-5 font-semibold text-xs text-black ">
                Lastname
              </p>
              <Inputbox
                placeholder="Enter your lastname"
                type="text"
                setvalue={setlastname}
              />

              <p className="pt-2 pb-1 ml-5 font-semibold text-xs text-black ">
                Password
              </p>
              <Inputbox
                placeholder="Enter your password"
                type="password"
                setvalue={setpassword}
              />
              <div className="ml-6 text-red-500 text-xs font-regular my-1">
                {message}
              </div>
              <div className=" my-2 mt-3 w-full text-center">
                <button className="w-11/12 p-1 py-1.5 text-xs text-white rounded-lg bg-black text-center hover:bg-gray-800">
                  Submit
                </button>
              </div>
            </div>
            <div className="text-center ">
              <div className="text-black text-xs md:text-sm font-regular">
                Already have an account?{" "}
                <button className="bg-white underline underline-offset-1 text-cyan-500"
                onClick={()=>{
                  navigate('/Signin')
                }}>
                  Signin
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-0 md:col-span-3 ">
        <img className="w-full h-screen z-0" src="a856b586153070160e616d035fff87fe.jpg"></img>

        </div>
      </div>
    </div>
  );
}
