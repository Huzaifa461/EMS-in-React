import React from 'react'
import { Nav } from '../Components/Nav'
import { Sidebar } from '../Components/Sidebar'
import { MainContent } from '../Components/MainContent'

export const Admin = () => {
  return (
    <>
      <div className="min-h-screen">
      <Nav />

      <div className="flex">
        <Sidebar/>

        <div className="flex-1 bg-gray-100 grid grid-cols-1  grid-rows-3  gap-3 p-6">
           <MainContent/>
        </div>
      </div>
    </div>
    </>
  )
}
