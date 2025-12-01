import React from 'react'

const Header = () => {
  return (
    <>
    <div className="header flex justify-between items-end">
     <p className='text-3xl font-bold '>Hello <br /> <span className='text-blue-600 ml-4'>Sam✋</span></p>
     <button className='text-2xl bg-blue-600 text-white px-5 py-3 rounded-md'>Log Out</button>

    </div>
    </>
  )
}

export default Header
