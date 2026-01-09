import React from 'react';
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from './NewTask';
import CompleteTask from "../TaskList/CompleteTask"
import FailedTask from '../TaskList/FailedTask'

const Tasklist = ({ data }) => {
  // console.log(data.tasks)
  
  return (
    <div
      id="Tasklist"
      className="mt-14 h-[50%] w-full flex flex-nowrap justify-start items-center gap-5 overflow-scroll"
    >
      {data.tasks.map((task, index) => {
        // console.log(task);

        if (task.active) {
          return <AcceptTask key={index}  task={task} />;
        }

        if (task.newtask) {
          return <NewTask key={index} task={task}/>;
        }

        if (task.completed) {
          return <CompleteTask key={index} task={task}/>;
        }

        if (task.failed) {
          return <FailedTask key={index} task={task}/>;
        }

        return null;
      })}
    </div>
  );
};


export default Tasklist;    