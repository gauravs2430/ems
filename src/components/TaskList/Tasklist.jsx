import React from 'react';
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from './NewTask';
import CompleteTask from "../TaskList/CompleteTask"
import FailedTask from '../TaskList/FailedTask'



const Tasklist = ({ data }) => {
  return (
    <div
      id="Tasklist"
      className="mt-14 h-[50%] w-full flex flex-nowrap justify-start items-center gap-5 overflow-scroll"
    >
      {data.tasks.map((task, index) => {
        if (task.active) {
          return <AcceptTask key={index} />;
        }

        if (task.newtask) {
          return <NewTask key={index} />;
        }

        if (task.completed) {
          return <CompleteTask key={index} />;
        }

        if (task.failed) {
          return <FailedTask key={index} />;
        }

        return null;
      })}
    </div>
  );
};


export default Tasklist;    