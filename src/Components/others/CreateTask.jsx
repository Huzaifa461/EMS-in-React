import React from 'react'

const CreateTask = () => {
  return (
     <>
      <div className=' mt-10'>
        <h1 className='text-2xl text-blue-600 font-bold text-center'>Create task</h1> 
        <form className=' mx-auto flex flex-col  justify-start py-10  w-[60%] border-2 border-blue-600 px-5 rounded-[4px] mt-6  '>
           
           <div className='flex justify-between items-start gap-2'>
               <div className='flex flex-col gap-3 text-blue-600 w-[50%] '>
            <label className='text-xl font-semibold' >Task tile</label>
            <input type="text" placeholder='what task do you want to assign' className=' w-full border-2 border-blue-600 p-2 rounded-md'/>
           </div>

           <div className='flex flex-col gap-3 text-blue-600 w-[50%] '>
            <label className='text-xl font-semibold' >Assign to</label>
            <input type="text" placeholder='Employee Name' className=' w-full  border-2 border-blue-600 p-2 rounded-md'/>
           </div>
           </div>
           

           <div className='flex justify-between items-start gap-2 mt-5'>
               <div className='flex flex-col gap-3 text-blue-600 w-[50%] '>
            <label className='text-xl font-semibold' >Date</label>
            <input type="Date" placeholder='DD/MM/YYYY' className='w-full border-2 border-blue-600 p-2 rounded-md'/>
           </div>

           <div className='flex flex-col gap-3 text-blue-600 w-[50%] '>
            <label className='text-xl font-semibold' >Caterogary</label>
            <input type="text" placeholder='Which Cateogary of task' className=' w-full  border-2 border-blue-600 p-2 rounded-md'/>
           </div>
           </div>

           <div className='flex flex-col gap-3 text-blue-600 mt-5'>
            <label className='text-xl font-semibold' >Description</label>
            <textarea type="text" placeholder='Write the description of task' className=' w-full  border-2 border-blue-600 p-2 rounded-md'/>
           </div>


        </form>
     </div>
     </>
  )
}

export default CreateTask
