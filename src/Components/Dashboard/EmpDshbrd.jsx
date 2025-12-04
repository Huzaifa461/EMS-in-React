import React, { useEffect } from 'react'
import Header from '../others/Header'
import TaskCard from '../others/TaskCard'
import TaskList from '../Task/TaskList'
import { useNavigate } from 'react-router-dom'

const EmpDshbrd = ({user , setuser}) => {
   
  const navigate= useNavigate()
  function handleLogout(){
    setuser(null)
    localStorage.removeItem('loggedIn_user')
    navigate('/')
}
  return (
    <>
    <div className='p-12 h-screen'>
     <Header user={user} handleLogout={handleLogout}/>
     <TaskCard user={user}/>
     <TaskList user={user}/>
     </div>
    </>
  )
}

export default EmpDshbrd
