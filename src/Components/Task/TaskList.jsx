import React from 'react'
import AcceptTsk from './AcceptTsk'
import CompleteTsk from './CompleteTsk'
import FailTsk from './FailTsk'
import NewTsk from './NewTsk'

const TaskList = ({user}) => {
  return (
    <>
     <div
  id="tasklist"
  className="w-full h-[55%] flex items-center justify-start gap-10 mt-28 py-9 overflow-x-auto text-white"
>
  {user.user.tasks.map((elem , index)=>{
  if(elem.active){
   return <AcceptTsk key={index}/>

  }
  if(elem.newTask){

   return <NewTsk key={index}/>
  }
  if(elem.completed){

  return <CompleteTsk key={index}/>
   
  }
  
  if(elem.failed){

   return  <FailTsk key={index}/>
  }

  })}

  
  
  
</div>

    </>
  )
}

export default TaskList
