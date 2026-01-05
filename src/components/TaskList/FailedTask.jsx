import React from 'react';

const FailedTask = () => {
  return (
    <div className="text-white px-6 py-4 h-[85%] w-94 bg-blue-400 rounded-lg flex-shrink-0">
            <div className="flex justify-between items-center">
                <h2 className="font-semibold px-3 py-1 bg-red-500 rounded-xl" >High</h2>
                <h3 className="font-semibold" >29 Dec 2025</h3>
            </div>
            <h1 className='font-semibold text-2xl mt-5' >
                Make a Youtube Video
            </h1>
            <p className="text-medium mt-2 font-medium ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, et perferendis? Perferendis iendis tempora quibusdam.</p>
            <div className='mt-2 '>
                <button className='w-full'>
                    Compleate
                </button>
            </div>
        </div>
  );
};

export default FailedTask;