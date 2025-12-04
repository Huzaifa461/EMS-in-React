import React, { useEffect } from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTaskNum'
import { useNavigate } from 'react-router-dom'

const AdminDshbrd = ({user , setuser} ) => {
  
  const navigate= useNavigate()
  const handleLogout=()=>{
    setuser(null)
    localStorage.removeItem('loggedIn_user')
    navigate('/')
}
  return (
    <>
    <div className='p-12 h-screen'>
     <Header user={user } handleLogout={handleLogout}/>
     <CreateTask/>
     <AllTask/>
     </div>

    </>
  )
}

export default AdminDshbrd
