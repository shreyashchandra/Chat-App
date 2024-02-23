import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Inputbox } from "./Inputbox"
import axios from "axios";

export function Signin() {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [message,setmessage]=useState('')
    const navigate=useNavigate();
    return (<>
<div className="w-full h-screen overflow-y-auto grid grid-cols-4 sm:grid-cols-9 items-center font-sans">
        <div className="col-span-0 sm:col-span-3"></div>

     {/* Main div starts here */}

        <div className="col-span-4 sm:col-span-3 flex justify-center ">
         <div className="w-11/12 h-80 bg-white shadow-3xl rounded-lg ">
            <div className="text-center pt-6">
                <p className="text-xl sm:text-3xl text-black font-bold">Signin</p> 
                <p className="text-md sm:text-lg font-regular leading-tight text-gray-400 pt-2">Enter your credentials to sign in</p> 
            </div>
            <div className="mt-2">
            <p className="pt-2 pb-1 ml-5 font-semibold text-xs text-black ">
                Email
              </p>
              <Inputbox
                placeholder="Enter your email"
                type="text"
                setvalue={setemail}
              />
            <p className="pt-2 pb-1 ml-5 font-semibold text-xs text-black ">
                Password
              </p>
              <Inputbox
                placeholder="Enter your password"
                type="password"
                setvalue={setpassword}
              />
               <div className="ml-6 text-red-500 text-xs font-regular my-1.5 mt-2">
                {message}
              </div>
               <div className=" my-2 mt-3 w-full text-center">
                <button className="w-11/12 p-1 py-1.5 text-xs text-white rounded-lg bg-black text-center hover:bg-zinc-900"
                         onClick={async ()=>{
                          const response=await axios.post("http://localhost:3000//api/v1/user",{
                            email,
                            password
                          },
                          {
                            headers:{
                              'Content-type':"application/json"
                            }
                          }
                          )
                          const messages=response.data.message;
                          if (message.includes("success")){
                            setmessage(messages);
                          }
                         }}
                >
                  Submit
                </button>
              </div>
              <div className="text-center ">
              <div className="text-black text-xs md:text-sm font-regular">
                Don't have an account?{" "}
                <button className="bg-white underline underline-offset-1 text-cyan-500 "
                 onClick={()=>{
                    navigate('/Signup')
                  }}>
                  Signup
                </button>
              </div>
            </div>
            </div>
         </div>
        </div>


        {/* Main div ends here */}

        
        <div className="col-span-0 sm:col-span-3"></div>


    </div>
    </>)
}