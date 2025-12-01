import React from 'react'
import Header from '../others/Header'
import TaskCard from '../others/TaskCard'
import TaskList from '../Task/TaskList'

const EmpDshbrd = () => {
  return (
    <>
    <div className='p-12 h-screen'>
     <Header/>
     <TaskCard/>
     <TaskList/>
     </div>
    </>
  )
}

export default EmpDshbrd
