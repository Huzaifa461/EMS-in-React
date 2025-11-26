import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import login from "../assets/login.jpg"


export const Login = () => {
  const navigate= useNavigate()
  const [form, setform] = useState({email:'', pass:''})
  const handleChange=(e)=>{
    setform({...form, [e.target.name] : e.target.value})

}
const handleSubmit=(e)=>{
  e.preventDefault()
  if(form.email=="admin"  && form.pass==1234){
    toast.success("login successfully 👍")
    navigate('/admin')
  }
else if(form.email.endsWith('@gmail.com') && form.pass){
           toast.success("login successfully 👍")
           navigate('/emply')
}
else if(!form.email || !form.pass){
  toast.error("Fill all inputs")
}
else{
  toast.error("invalid username or password")
}

}

  return ( 
   <>
     <div className="form flex items-center justify-center gap-40 h-screen bg-white">
        
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-8  b  px-2 py-16 w-full  rounded-3xl   md:px-8 md:w-[500px]  bg-gradient-to-br from-sky-400 to-blue-800  '>
         <h1 className='text-3xl mb-10 font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400'>Account Login</h1>
         <input type="text" placeholder='Enter your email' className='mt-14 outline-none w-full px-4 py-2  rounded-md md:w-96 placeholder:text-xl text-black'
         name="email"
         value={form.email}
         onChange={handleChange}/>
         <input type="password" placeholder='Enter password'className='outline-none w-full px-4 py-2 rounded-md md:w-96 placeholder:text-xl text-black'
         name="pass"
         value={form.pass}
         onChange={handleChange}
         />
         <button className='text-xl font-bold rounded-md  text-blue-800
         bg-gradient-to-r from-white to-gray-400 px-10 py-4 w-56 ' >Login</button>
        </form>

        <img src={login}
         alt="" 
         className='hidden md:inline-block md:w-[500px] md:h-[500px] -translate-y-10'/>
     </div>
   </>
  )
}
