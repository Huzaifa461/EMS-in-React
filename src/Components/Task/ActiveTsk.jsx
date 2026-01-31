import React from 'react'

const ActiveTsk = ({task}) => {
  // console.log(user)
  return (
    <>
     <div className="w-[270px] h-full rounded-xl  border-2 bg-gray-900 border-blue-600 p-5">
   <div className='flex justify-between '>
    <h2 className='text-sm bg-white p-1 rounded-[4px] text-blue-800 font-semibold'>High acc</h2>
    <h2 className='text-sm'>23 Feb </h2>
   </div>
   <h2 className='mt-5 text-2xl font-semibold'>
  {task.taskTitle}
   </h2>
   <p className='font-light mt-5'>
    {task.taskDescription}
   </p>

   <div className='flex justify-center gap-6 mt-10'>
    <button className='bg-green-500 p-1 text-sm rounded-sm'>Complete Task</button>
    <button className='bg-red-500 p-1 text-md rounded-sm'>Failed Task</button>
   </div>
  </div>
    </>
  )
}

export default ActiveTsk
