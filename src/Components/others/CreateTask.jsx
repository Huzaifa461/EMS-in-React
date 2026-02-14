import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const  {emply, setuserdata} = useContext(AuthContext)
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [assignto, setassignto] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [category, setcategory] = useState("");
  const [NewTsk, setNewTsk] = useState({})

  const submithandler = (e) => {
    e.preventDefault();
    if (
      taskTitle === "" ||
      taskDescription === "" ||
      assignto === "" ||
      taskDate === "" ||
      category === ""
    ) {
      alert("please fill alll fields");
      return;
    }
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedEmply = emply.map((emp)=>{
      if(emp.firstName === assignto){
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCounts:{
              ...emp.taskCounts,
              newTask: emp.taskCounts.newTask +1
          }
        }
      }
      return emp;
    })
    localStorage.setItem('employee', JSON.stringify(updatedEmply));

    setuserdata((prev)=>{
      return {
        ...prev,
        emply: updatedEmply
      }
    })

    settaskTitle("");
    settaskDescription("");
    setassignto("");
    settaskDate("");
    setcategory("");
    
  };
  // console.log(elem)

  return (
    <>
      <div className=" mt-10">
        <h1 className="text-2xl text-blue-600 font-bold text-center">
          Create task
        </h1>
        <form
          className=" mx-auto flex flex-col  justify-start py-10  w-[60%] border-2 border-blue-600 px-5 rounded-[4px] mt-6 "
          onSubmit={(e) => {
            submithandler(e);
          }}
        >
          <div className="flex justify-between items-start gap-2">
            <div className="flex flex-col gap-3 text-blue-600 w-[50%] ">
              <label className="text-xl font-semibold">Task tile</label>
              <input
                type="text"
                placeholder="what task do you want to assign"
                className=" w-full border-2 border-blue-600 p-2 rounded-md"
                value={taskTitle}
                onChange={(e) => {
                  settaskTitle(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col gap-3 text-blue-600 w-[50%] ">
              <label className="text-xl font-semibold">Assign to</label>
              <input
                type="text"
                placeholder="Employee Name"
                className=" w-full  border-2 border-blue-600 p-2 rounded-md"
                value={assignto}
                onChange={(e) => setassignto(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between items-start gap-2 mt-5">
            <div className="flex flex-col gap-3 text-blue-600 w-[50%] ">
              <label className="text-xl font-semibold">Date</label>
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                className="w-full border-2 border-blue-600 p-2 rounded-md"
                value={taskDate}
                onChange={(e) => settaskDate(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-3 text-blue-600 w-[50%] ">
              <label className="text-xl font-semibold">Caterogary</label>
              <input
                type="text"
                placeholder="Which category of task"
                className=" w-full  border-2 border-blue-600 p-2 rounded-md"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 text-blue-600 mt-5">
            <label className="text-xl font-semibold">Description</label>
            <textarea
              type="text"
              placeholder="Write the description of task"
              className=" w-full  border-2 border-blue-600 p-2 rounded-md"
              value={taskDescription}
              onChange={(e) => settaskDescription(e.target.value)}
            />
          </div>
          <button className="mx-auto bg-blue-600 text-white text-center text-lg py-2 my-4 rounded-lg px-10">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
