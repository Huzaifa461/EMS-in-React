import React from 'react'
import logo from "../assets/logo.png"
export const Nav = () => {
  return (
    <>
    <nav className='bg-emerald-200 flex items-center justify-between px-[2%] py-[2vh]'>

        <div className='right flex items-center justify-center gap-1'>
        <img src={logo} alt="" className='w-10 h-10' />
        <h1 className='text-2xl font-semibold'>Company</h1>
        </div>

        <i class="ri-menu-line text-2xl text-white font-bold" ></i>
    </nav>
    </>
  )
}
