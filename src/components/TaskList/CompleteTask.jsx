import React from 'react';

const CompleteTask = ({task}) => {
  return (
    <div className="text-white px-6 py-4 h-[85%] w-94 bg-yellow-400 rounded-lg flex-shrink-0">
            <div className="flex justify-between items-center">
                <h2 className="font-semibold px-3 py-1 bg-red-500 rounded-xl" >High</h2>
                <h3 className="font-semibold" >{task.date}</h3>
            </div>
            <h1 className='font-semibold text-2xl mt-5' >
                {task.title}
            </h1>
            <p className="text-medium    mt-2 font-medium ">{task.description}</p>
            <div className='mt-2 '>
                <button className='w-full'>
                    Compleate
                </button>
            </div>
        </div>
  );
};

export default CompleteTask;