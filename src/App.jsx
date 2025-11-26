import React from 'react'
import { Login } from './pages/Login'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { Admin } from './pages/Admin';
import { Employee } from './pages/Employee';

export const App = () => {
  return (
    <>
     <Toaster position="top-center" />     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/emply' element={<Employee />} />
          {/* <Route path='/Login' element={<Login />} /> */}
          {/* <Route path="/Sign" element={<Signup />}/> */}
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App