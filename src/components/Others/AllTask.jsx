import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

  const authData = useContext(AuthContext);

  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded-xl text-white h-75'>

      <div className=" bg-black text-white rounded-lg border-1 border-emerald-400 mb-2 py-2 px-4 flex justify-between">
        <h2 className="w-32 ">User</h2>
        <h3 className="flex justify-center w-32 ">New Task</h3>
        <h3 className="flex justify-center w-32 ">Active Tasks</h3>
        <h3 className="flex justify-center w-32 ">Completed Tasks</h3>
        <h3 className="flex justify-center w-32 ">Failed Tasks</h3>
      </div>

      <div className='h-[85%] overflow-auto'>
        {authData.employees.map((elem) => {
          // console.log(elem);
          return (
            <div className="bg-black-800 border-1 text-white border-emerald-400 rounded-lg mb-2 py-2 px-4 flex justify-between">
              <div className="w-32" ><h2>{elem.firstname}</h2></div>
              <div className="flex justify-center w-32" ><h3>{elem.taskCounts.newTask}</h3></div>
              <div className="flex justify-center w-32" ><h3>{elem.taskCounts.active}</h3></div>
              <div className="flex justify-center w-32" ><h3>{elem.taskCounts.completed}</h3></div>
              <div className="flex justify-center w-32" ><h3>{elem.taskCounts.failed}</h3></div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default AllTask;