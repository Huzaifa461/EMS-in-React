import React from 'react'

const TaskCard = ({user}) => {
  console.log(user)
  return (
    <>
     <div className='flex mt-16 justify-between gap-4'>
       <div className='bg-blue-600 w-[40%] px-7 py-10 rounded-lg'>
        <h2 className='text-white text-2xl font-semibold'>{user.taskCounts.newTask}</h2>
        <h3 className='text-white text-2xl font-semibold'>New Task</h3>
       </div>

        <div className='bg-blue-600 w-[40%] px-7 py-10 rounded-lg'>
        <h2 className='text-white text-2xl font-semibold'>{user.taskCounts.completed}</h2>
        <h3 className='text-white text-2xl font-semibold'>completed Task</h3>
       </div>

        <div className='bg-blue-600 w-[40%] px-7 py-10 rounded-lg'>
        <h2 className='text-white text-2xl font-semibold'>{user.taskCounts.active}</h2>
        <h3 className='text-white text-2xl font-semibold'>active Task</h3>
       </div>

        <div className='bg-blue-600 w-[40%] px-7 py-10 rounded-lg'>
        <h2 className='text-white text-2xl font-semibold'>{user.taskCounts.failed}</h2>
        <h3 className='text-white text-2xl font-semibold'>Failed Task</h3>
       </div>

     </div>
    </>
  )
}

export default TaskCard
