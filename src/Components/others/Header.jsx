import React from 'react'
import { Login } from '../Auth/Login'
import { useNavigate } from 'react-router-dom'

const Header = ({user , setuser}) => {
  const navigate= useNavigate()
  return (
    <>
    <div className="header flex justify-between items-end">
     <p className='text-3xl font-bold '>Hello <br /> <span className='text-blue-600 ml-4'>Sam✋</span></p>
     <button className='text-2xl bg-blue-600 text-white px-5 py-3 rounded-md'
     onClick={()=>{
      localStorage.clear()
      window.location.reload()
      setuser(null)
      navigate('/')
     }}
     >Log Out</button>

    </div>
    </>
  )
}

export default Header
