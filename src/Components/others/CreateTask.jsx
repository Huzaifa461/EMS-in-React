import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {


   
   const [tasktitle, setTasktitle] = useState('')
   const [taskdesc, settaskdesc] = useState('')
   const [assignto, setassignto] = useState('')
   const [date, setdate] = useState('')
   const [cateogary, setcateogary] = useState('')
  const  [Newtask, setNewtask] = useState(null)

   const submithandler=(e)=>{
      e.preventDefault()
      const data = JSON.parse(localStorage.getItem('employee'))
      setNewtask({tasktitle,taskdesc,date,cateogary, active:true, newTask:true, completed:false, failed: false})
      data.forEach((elem)=>{
         if(assignto == elem.firstName){
            if(Newtask !== null){
            elem.tasks.push(Newtask)
            }
            console.log(elem)
         }
         // console.log(elem.firstName)
   })
      // console.log("hello")
   }
   

  return (
     <>
      <div className=' mt-10'>
        <h1 className='text-2xl text-blue-600 font-bold text-center'>Create task</h1> 
        <form className=' mx-auto flex flex-col  justify-start py-10  w-[60%] border-2 border-blue-600 px-5 rounded-[4px] mt-6 '
        onSubmit={(e)=>{
          submithandler(e)
        }}>
           
           <div className='flex justify-between items-start gap-2'>
               <div className='flex flex-col gap-3 text-blue-600 w-[50%] '>
            <label className='text-xl font-semibold' >Task tile</label>
            <input type="text" placeholder='what task do you want to assign' className=' w-full border-2 border-blue-600 p-2 rounded-md'
            value={tasktitle}
            onChange={(e)=>{
               setTasktitle(e.target.value)
            }}/>
           </div>

           <div className='flex flex-col gap-3 text-blue-600 w-[50%] '>
            <label className='text-xl font-semibold' >Assign to</label>
            <input type="text" placeholder='Employee Name' className=' w-full  border-2 border-blue-600 p-2 rounded-md'
            value={assignto}
            onChange={(e)=>setassignto(e.target.value)}/>
           </div>
           </div>
           

           <div className='flex justify-between items-start gap-2 mt-5'>
               <div className='flex flex-col gap-3 text-blue-600 w-[50%] '>
            <label className='text-xl font-semibold' >Date</label>
            <input type="Date" placeholder='DD/MM/YYYY' className='w-full border-2 border-blue-600 p-2 rounded-md'
            value={date}
            onChange={(e)=>setdate(e.target.value)}/>
           </div>

           <div className='flex flex-col gap-3 text-blue-600 w-[50%] '>
            <label className='text-xl font-semibold' >Caterogary</label>
            <input type="text" placeholder='Which Cateogary of task' className=' w-full  border-2 border-blue-600 p-2 rounded-md'
            value={cateogary}
            onChange={(e)=>setcateogary(e.target.value)}/>
           </div>
           </div>

           <div className='flex flex-col gap-3 text-blue-600 mt-5'>
            <label className='text-xl font-semibold' >Description</label>
            <textarea type="text" placeholder='Write the description of task' className=' w-full  border-2 border-blue-600 p-2 rounded-md'
            value={taskdesc}
            onChange={(e)=>settaskdesc(e.target.value)}/>
           </div>
           <button className='mx-auto bg-blue-600 text-white text-center text-lg py-2 my-4 rounded-lg px-10'>Submit</button>

        </form>
     </div>
     </>
  )
}

export default CreateTask
