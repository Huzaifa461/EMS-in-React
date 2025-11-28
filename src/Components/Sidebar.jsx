import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
    <div className="sidebar hidden md:w-[19vw] xl:w-[12vw] md:min-h-[calc(100vh-7vh)] md:flex flex-col  font-semibold text-2xl text-center  pt-6 bg-white rounded-tr-3xl rounded-br-xl ">
        <Link className=' border-b-2 border-gray-300 pb-3'>Dashboard</Link>
        <Link className=' border-b-2 border-gray-300 p-3'>Attendence</Link>
        <Link className=' border-b-2 border-gray-300 p-3' >Leave</Link>
        <Link className=' border-gray-300 p-3'>Profile</Link>
    </div>
    </>
  )
}
