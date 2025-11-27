import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
    <div className="sidebar flex flex-col justify-start items-center font-semibold text-2xl gap-10 pt-16 bg-red-200 w-[20vw]">
        <h1 className=' border-b-2 border-black mx-auto bg--800'>Dashboard</h1>
        <Link>Attendence</Link>
        <Link>Leave</Link>
        <Link>Profile</Link>
    </div>
    </>
  )
}
