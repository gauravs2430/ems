import React from 'react';

const TaskListNumbers = ({data}) => {
  return (  
    <div className='flex justify-between screen gap-5 mt-10' >
      <div className="w-[45%] bg-red-400 rounded-xl p-6 flex items-center justify-start" >
        <span>
            <h1 className="text-5xl text-white font-bold">{data.taskCounts.newTask}</h1>
            <h2 className='text-4xl text-white font-medium' >New Task</h2>
        </span>
      </div >
      <div className="h-[15%] w-[45%] bg-blue-400 rounded-xl p-6 flex items-center justify-start" >
        <span>
            <h1 className="text-5xl text-white font-bold">{data.taskCounts.completed}</h1>
            <h2 className='text-4xl text-white font-medium' >Completed Task</h2>
        </span>
      </div >
      <div className="h-[15%] w-[45%] bg-green-400 rounded-xl p-6 flex items-center justify-start" >
        <span>
            <h1 className="text-5xl text-white font-bold">{data.taskCounts.active}</h1>
            <h2 className='text-4xl text-white font-medium' >Active Task</h2>
        </span>
      </div >
      <div className="h-[15%] w-[45%] bg-yellow-400 rounded-xl p-6 flex items-center justify-start" >
        <span>
            <h1 className="text-5xl text-white font-bold">{data.taskCounts.failed}</h1>
            <h2 className='text-4xl text-white font-medium' >Failed Task</h2>
        </span>
      </div >
    </div>
  );
};

export default TaskListNumbers; 