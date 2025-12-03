import React, { useEffect } from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDshbrd = ({user , setuser} ) => {
//   useEffect(() => {
   
//  console.log({user})
   
//  }, [user])
  return (
    <>
    <div className='p-12 h-screen'>
     <Header user={user } setuser={setuser}/>
     <CreateTask/>
     <AllTask/>
     </div>

    </>
  )
}

export default AdminDshbrd
