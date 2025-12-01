import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDshbrd = () => {
  return (
    <>
    <div className='p-12 h-screen'>
     <Header/>
     <CreateTask/>
     <AllTask/>
     </div>

    </>
  )
}

export default AdminDshbrd
