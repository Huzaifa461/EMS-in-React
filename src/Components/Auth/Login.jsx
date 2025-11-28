import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
// import log from "../assets/log.png"
// import lg from "../assets/lg.png"


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
     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
{/* Reference-style Card */}
<div className="relative bg-white shadow-2xl rounded-md w-[340px] md:w-[500px] p-6 border-2 border-indigo-900">
{/* Title */}
<p className="text-center text-indigo-900 text-2xl font-bold tracking-[4px] mb-6">
ACCOUNT LOGIN
</p>


{/* Form */}
<form
onSubmit={handleSubmit}
className="flex flex-col items-center gap-8 w-full"
>
<input
type="text"
placeholder="Enter your email"
className="outline-none w-full px-4 py-2 border-b border-gray-300 focus:border-indigo-700 placeholder:text-lg placeholder:text-indigo-600 text-black"
name="email"
value={form.email}
onChange={handleChange}
/>


<input
type="password"
placeholder="Enter password"
className="outline-none w-full px-4 py-2 border-b border-gray-300 focus:border-indigo-700 placeholder:text-lg placeholder:text-indigo-600 text-black"
name="pass"
value={form.pass}
onChange={handleChange}
/>


<button
type="submit"
className="absolute right-[-10px] bottom-[-20px] bg-indigo-900 text-white font-bold tracking-[5px] text-xs px-6 py-3 rounded-full rounded-tr-none rounded-br-none shadow-lg hover:bg-indigo-950 transition"
>
LOGIN
</button>
</form>
</div>
</div>
   </>
  )
}
