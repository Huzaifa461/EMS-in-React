import React from 'react'
import { Nav } from '../Components/Nav'
import { Sidebar } from '../Components/Sidebar'

export const Employee = () => {
  return (
    <>
    
    <div className="min-h-screen">
      <Nav />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-gray-100 p-6">
           main content 
        </div>
      </div>
    </div>


    </>
  )
}
