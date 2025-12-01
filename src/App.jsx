import React, { useEffect } from 'react'
import { Login } from './Components/Auth/Login'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import  Admin  from './Components/Dashboard/AdminDshbrd';
import EmpDshbrd from './Components/Dashboard/EmpDshbrd';
import { SetLocalStorage } from './utils/localStorag';


export const App = () => {

  useEffect(() => {
    SetLocalStorage()
  
    
  })
  
  return (
    <>
     <Toaster position="top-center" />     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          {/* <Route path='/' element={<Admin />} /> */}
          {/* <Route path='/' element={<EmpDshbrd />} /> */}
          {/* <Route path='/Login' element={<Login />} /> */}
          {/* <Route path="/Sign" element={<Signup />}/> */}
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App