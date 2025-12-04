import React from 'react'

const CompleteTsk = () => {
  return (
    <>
    <div className="w-[270px] h-full rounded-xl  border-2 bg-gray-900 border-blue-600 p-5">
   <div className='flex justify-between '>
    <h2 className='text-sm bg-white p-1 rounded-[4px] text-blue-800 font-semibold'>High</h2>
    <h2 className='text-sm'>23 Feb </h2>
   </div>
   <h2 className='mt-5 text-2xl font-semibold'>
    Make a youtube video
   </h2>
   <p className='font-light mt-5'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, recusandae?
   </p>

   <div className='bg-green-500 mt-10 rounded-sm'>
        <p className='text-md text-center'>Completed</p>
   </div>
  </div>
    </>
  )
}

export default CompleteTsk
