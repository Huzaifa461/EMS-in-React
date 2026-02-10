import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authdata = useContext(AuthContext);
  if (!authdata  || !Array.isArray(authdata.emply)) {
    return (
      <p className="text-xl text-blue-400 text-center my-auto">...Loading</p>
    );
  }
//   console.log(authdata.emply);

  return (
    <>
      <div className="bg-blue-600  mt-10 p-5 rounded w-[70%] mx-auto h-60 overflow-hidden ">
        <div className="grid grid-cols-5 px-4 py-2 bg-gray-700 rounded-sm w-[95%] mx-auto mb-2">
          <h2 className="text-white font-semibold text-left">Employee Name</h2>
          <h2 className="text-sky-300 font-semibold text-center">New Task</h2>
          <h2 className="text-yellow-500 font-semibold text-center">
            {" "}
            Active Task
          </h2>
          <h2 className="text-green-500 font-semibold text-center">
            Completed Task{" "}
          </h2>
          <h2 className="text-red-500 font-semibold text-right">Failed Task</h2>
        </div>

        <div className="h-52 pb-11 overflow-auto">
          {authdata.emply.map((elem, index) => (
            <div
              key={index}
              className="grid grid-cols-5 px-4 py-2 bg-gray-700 rounded-sm w-[95%] mx-auto mb-2 "
            >
              <h2 className="text-white text-left">{elem.firstName}</h2>
              <h2 className="text-sky-300 text-center">
                {elem.taskCounts.newTask}
              </h2>
              <h2 className="text-yellow-500 text-center">
                {elem.taskCounts.active}
              </h2>
              <h2 className="text-green-500 text-center">
                {elem.taskCounts.completed}
              </h2>
              <h2 className="text-red-500 text-right">
                {elem.taskCounts.failed}
              </h2>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default AllTask;
