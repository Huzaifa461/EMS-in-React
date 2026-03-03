import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const ActiveTsk = ({task, User}) => {

  const data = JSON.parse(localStorage.getItem('employee'))
  const {emply, setuserdata} = useContext(AuthContext)
   let Emp = data.find((e)=> e.id == User.id)
   let tsk = Emp.tasks;
   let MainTsk = tsk.find((t)=> t.taskTitle == task.taskTitle)

   const handleComplete=()=>{
    const updatedEmp = emply.map((emp)=>{
      if(emp.id == User.id){
        return{
          ...emp,
          tasks: emp.tasks.map((t)=>{
          if(t.taskTitle == task.taskTitle){
            return{
              ...t,
              active: false,
              completed: true
            }
          } 
            return t;
          
          }),
          taskCounts:{
            ...emp.taskCounts,
            active: emp.taskCounts.active -1,
            completed : emp.taskCounts.completed + 1
          }

        }
      }
      return emp;
    })
    localStorage.setItem('employee', JSON.stringify(updatedEmp));
    setuserdata((prev)=>{
      return {
        ...prev,
        emply: updatedEmp
      }
    })
   }
   const handleFail = ()=>{
    const updatedEmp = emply.map((emp)=>{
      if(emp.id == User.id){
        return{
          ...emp,
          tasks: emp.tasks.map((t)=>{
          if(t.taskTitle == task.taskTitle){
            return{
              ...t,
              active: false,
              failed: true
            }
          } 
            return t;
          
          }),
          taskCounts:{
            ...emp.taskCounts,
            active: emp.taskCounts.active -1,
            completed : emp.taskCounts.failed + 1
          }

        }
      }
      return emp;
    })
    localStorage.setItem('employee', JSON.stringify(updatedEmp));
    setuserdata((prev)=>{
      return {
        ...prev,
        emply: updatedEmp
      }
    })

   }
  
  // console.log(user)
  return (
    <>
     <div className="w-[270px] h-full rounded-xl  border-2 bg-gray-900 border-blue-600 p-5">
   <div className='flex justify-between '>
    <h2 className='text-sm bg-white p-1 rounded-[4px] text-blue-800 font-semibold'>High acc</h2>
    <h2 className='text-sm'>23 Feb </h2>
   </div>
   <h2 className='mt-5 text-2xl font-semibold'>
  {MainTsk.taskTitle}
   </h2>
   <p className='font-light mt-5'>
    {MainTsk.taskDescription}
   </p>

   <div className='flex justify-center gap-6 mt-10'>
    <button className='bg-green-500 p-1 text-sm rounded-sm' onClick={handleComplete}>Complete Task</button>
    <button className='bg-red-500 p-1 text-md rounded-sm' onClick={handleFail}>Failed Task</button>
   </div>
  </div>
    </>
  )
}

export default ActiveTsk
