import React from 'react';
import Header from '../Others/Header.jsx';

const AdminDashboard = () => {
  return (
    <div className='p-8 h-screen w-full'>
      <Header/>

      <div className='pt-12 text-white'>
        <form action="" className="space-y-4 max-w-xl">
          <div>
            <h3 className="mb-1">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded"
            />
          </div>

          <div>
            <h3 className="mb-1">Description</h3>
            <textarea
              cols="30"
              rows="6"
              placeholder="Task details..."
              className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded resize-y"
            ></textarea>
          </div>

          <div>
            <h3 className="mb-1">Date</h3>
            <input
              type="date"
              className="w-full bg-transparent border border-gray-600 text-white px-3 py-2 rounded"
            />
          </div>

          <div>
            <h3 className="mb-1">Assign To</h3>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded"
            />
          </div>

          <div>
            <h3 className="mb-1">Category</h3>
            <input
              type="text"
              placeholder="design , dev , etc"
              className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;