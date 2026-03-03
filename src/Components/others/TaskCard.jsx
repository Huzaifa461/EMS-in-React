import React from 'react'

const TaskCard = ({user}) => {
  // if(!user) return null;
  console.log("this is user", user)

  const data = JSON.parse(localStorage.getItem('employee'))
const emply = data.find(
  (elem)=> user?.id == elem.id
);

console.log('this is taskcard',emply)

  return (
    <>
    
    <div className='flex mt-16 justify-between gap-4'>
       <div className='bg-blue-600 w-[40%] px-7 py-10 rounded-lg'>
        <h2 className='text-white text-2xl font-semibold'>{emply?.taskCounts.newTask}</h2>
        <h3 className='text-white text-2xl font-semibold'>New Task</h3>
       </div>

        <div className='bg-blue-600 w-[40%] px-7 py-10 rounded-lg'>
        <h2 className='text-white text-2xl font-semibold'>{emply?.taskCounts.completed}</h2>
        <h3 className='text-white text-2xl font-semibold'>completed Task</h3>
       </div>

        <div className='bg-blue-600 w-[40%] px-7 py-10 rounded-lg'>
        <h2 className='text-white text-2xl font-semibold'>{emply?.taskCounts.active}</h2>
        <h3 className='text-white text-2xl font-semibold'>active Task</h3>
       </div>

        <div className='bg-blue-600 w-[40%] px-7 py-10 rounded-lg'>
        <h2 className='text-white text-2xl font-semibold'>{emply?.taskCounts.failed}</h2>
        <h3 className='text-white text-2xl font-semibold'>Failed Task</h3>
       </div>

     </div>
    
    </>
  )
}

export default TaskCard
