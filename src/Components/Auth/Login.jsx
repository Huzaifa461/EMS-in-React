import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import log from "../assets/log.png"
import lg from "../assets/lg.png"


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
     <div className="form flex items-center justify-center  h-screen bg-white">
        
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-8  b  px-2 py-12 w-full h-full rounded-md  md:px-11 md:w-[500px]   bg-gradient-to-br from-indigo-100 via-indigo-500 to-black '>
         <h1 className='text-3xl mb-10 font-bold text-white'>Account Login</h1>
         <input type="text" placeholder='Enter your email' className='mt-6 outline-none w-full px-4 py-2   md:w-96 placeholder:text-xl placeholder:text-indigo-700 text-black focus:border-b-2 border-indigo-700'
         name="email"
         
         value={form.email}
         onChange={handleChange}/>
         <input type="password" placeholder='Enter password'className='outline-none w-full px-4 py-2 focus:border-b-2 border-indigo-700 md:w-96 placeholder:text-xl placeholder:text-indigo-700 text-black'
         name="pass"
         value={form.pass}
         onChange={handleChange}
         />
         <button className='text-xl font-bold rounded-md  text-white border-2 border-whitw hover:bg-indigo-700 px-20 py-4
          ' >Login</button>
        </form>

        <img src={lg}
         alt="" 
         className='hidden md:inline-block md:w-[600px] md:h-[700px] -translate-y-10'/>
     </div>
   </>
  )
}
