// import { useEffect, useState } from 'react'

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});
//  console.log("hii")
//   // fetch("https://google.com", async (res) => {
//   //   const json = await res.json();
//     // Assume it is { income: 100 }
//   // });

//   useEffect(()=>{
//     setTimeout(() => {
//       setBankData({
//          income: 100
//       });
//     }, 3000);},[])

//     useEffect(()=>{
//       setTimeout(() => {
//         setExchangeData({
//           returns: 100
//         });
//       }, 1000);},[])

//   const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }

// export default App

import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../component/Signup";
import Signin from "../component/Signin";
import {io} from "socket.io-client"
import Chatarea from "../component/Chatinterface";

const socket=io.connect("http://localhost:3000")

function App() {
  
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chatarea></Chatarea>}/>
          <Route path="/Signup" element={<Signup></Signup>} />
          <Route path="/signin" element={<Signin></Signin>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
  //   const [exchange1Data, setExchange1Data] = useState({});
  //   const [exchange2Data, setExchange2Data] = useState({});
  //   const [bankData, setBankData] = useState({});

  //   useEffect(() => {
  //     // Some operation to get the data
  //     setTimeout(() => {
  //       setExchange1Data({
  //       returns: 100
  //     });
  //     }, 2000);

  //   }, [])

  //   useEffect(() => {
  //     // Some operation to get the data
  //     setTimeout(() => {
  //       setExchange2Data({
  //         returns: 100
  //       });
  //     }, 2000);

  //   }, [])

  //   useEffect(() => {
  //     // Some operation to get the data
  //     setTimeout(() => {
  //       setBankData({
  //         income: 100
  //       });
  //     },5000)
  //   }, [])

  //   const cryptoReturns =useMemo(()=>{
  //     console.log()
  //    return exchange1Data.returns + exchange2Data.returns;
  //   },[exchange1Data,exchange2Data])

  //   const incomeTax = (cryptoReturns + bankData.income) * 0.3

  //   return (
  //     <div>
  // okay this how he do this thing    </div>
  //   )
}

export default App;
