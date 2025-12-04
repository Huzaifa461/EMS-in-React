import React, { useContext, useEffect, useState } from 'react'
import { Login } from './Components/Auth/Login'
import { createBrowserRouter, Navigate, useNavigate, useNavigationType } from "react-router";
import { RouterProvider } from "react-router/dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import  Admin  from './Components/Dashboard/AdminDshbrd';
import EmpDshbrd from './Components/Dashboard/EmpDshbrd';
import { getLocalStorage, SetLocalStorage } from './utils/localStorag';
import { AuthContext } from './context/AuthProvider';


export const App = () => {


     const [user, setuser] = useState(null)
     const navigate= useNavigate()

     const data= useContext(AuthContext)
      useEffect(()=>{
      const savedUser = JSON.parse(localStorage.getItem("loggedIn_user"));
      console.log(savedUser)
    if (savedUser) setuser(...savedUser);
        
      },[])
     
      

     
              
  
  return (
    <>
     <Toaster position="top-center" />     
    
        <Routes>
          <Route 
            path="/" 
            element={
              user 
                ? (user.role == 'admin'
                    ? <Navigate to="/admin" /> 
                    : <Navigate to="/emply" />) 
                : <Login user={user} setuser={setuser} data={data} />
            } 
          /> 
          <Route path='/admin' element={<Admin user={user} setuser={setuser}/>} />
          <Route path='/emply' element={<EmpDshbrd user={user} setuser={setuser} />} />
        </Routes>
    
    </>
  )
}


export default App