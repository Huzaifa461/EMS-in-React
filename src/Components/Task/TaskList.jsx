import React from "react";
import ActiveTsk from "./ActiveTsk";
import CompleteTsk from "./CompleteTsk";
import FailTsk from "./FailTsk";
import NewTsk from "./NewTsk";

const TaskList = ({ user }) => {
  if (!user)
    return (
      <h1 className="text-2xl text-blue-500 text-center place-content-center">
        ...Loading
      </h1>
    );

    const data = JSON.parse(localStorage.getItem('employee'))
  return (
    <>
      <div
        id="tasklist"
        className="w-full h-[55%] flex items-center justify-start gap-10 mt-28 py-9 overflow-x-auto text-white"
      >
        {user.tasks.map((elem, index) => {
          if (elem.active) {
            // console.log("active task")
            return <ActiveTsk task={elem} User={user} key={index} />;
          }
          if (elem.newTask) {
            // console.log("new task")
            return <NewTsk task={elem} User={user} key={index} />;
          }
          if (elem.completed) {
            return <CompleteTsk task={elem} User={user} key={index} />;
          }

          if (elem.failed) {
            return <FailTsk task={elem} User={user} key={index} />;
          }

          console.log(`Task ${index}: No condition matched!`);
          return null;
        })}
      </div>
    </>
  );
};

export default TaskList;
