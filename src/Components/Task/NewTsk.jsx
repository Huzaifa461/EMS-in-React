import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTsk = ({task,User}) => {
  const data = JSON.parse(localStorage.getItem('employee'))
  const {emply, setuserdata} = useContext(AuthContext)
  let Emp= data.find((emp)=> emp.id == User.id)
  console.log("this is Emp", Emp)
  const Rtask = Emp.tasks;
  // const R0task = [...Rtask]
  const Etask= Rtask.find(t => t.taskTitle == task.taskTitle)
  console.log("this is Etask", Etask)
  
  const handleAccept = () => {   
      const updatedEmply = emply.map((emp)=>{
        if(emp.id == User.id){
          return {
            ...emp,
            tasks:emp.tasks.map((t)=>{
              if(t.taskTitle == task.taskTitle){
                return {  
                  ...t,
                  active: true,
                  newTask: false
                }
              }
              return t;
            }
            ),
            taskCounts:{
              ...emp.taskCounts,
              active: emp.taskCounts.active + 1,
              newTask: emp.taskCounts.newTask - 1
            }
          }
        } else {
          return emp;
        }
      })
      localStorage.setItem('employee', JSON.stringify(updatedEmply));
      setuserdata((prev)=>{
      return {
        ...prev,
        emply: updatedEmply
      }
    })
  }

      
  return (
   <>
   <div className="w-[270px] h-full rounded-xl  border-2 bg-gray-900 border-blue-600 p-5">
   <div className='flex justify-between '>
    <h2 className='text-sm bg-white p-1 rounded-[4px] text-blue-800 font-semibold'>High new</h2>
    <h2 className='text-sm'>23 Feb </h2>
   </div>
   <h2 className='mt-5 text-2xl font-semibold'>
     {/* {Emp.tasks.find((t)=> t.taskTitle == task.taskTitle).taskTitle} */}
      {Etask.taskTitle}
   </h2>
   <p className='font-light mt-5'>
    {/* {Emp.tasks.find((t)=> t.taskTitle == task.taskTitle).taskDescrip/tion} */}
    {Etask.taskDescription}
   </p>

   <div className=' justify-center gap-6 mt-10'>
    <button className='bg-green-500 p-1 text-sm rounded-sm'
    onClick={handleAccept}>Accept Task</button>
    
   </div>
  </div>
   </>
  )
}

export default NewTsk
