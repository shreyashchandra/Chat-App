import { useState } from 'react'
import './App.css'
import {BrowserRouter,Router,Route, Routes} from "react-router-dom"
import { Signup } from './component/Signup'
import 'tailwindcss/tailwind.css';
import { Signin } from './component/Signin';
import { Dashboard } from './component/Dashboard';


function App() {
  

  return (
    <>
    
     <BrowserRouter>
     <Routes>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/Signin' element={<Signin/>}/>
     </Routes>
     </BrowserRouter>
       
    </>
  )
}

export default App
