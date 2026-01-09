import React from 'react';

const CreateTask = () => {
    return (
        <div>
            <div className='pt-12 text-white'>
                <form className='flex justify-between gap-6 border-1 border-emerald-300 p-8 rounded-xl'>
                    <div className='w-[45%] flex flex-col gap-4'>
                        <div>
                            <h3 className="mb-1">Task Title</h3>
                            <input
                                type="text"
                                placeholder="Make a UI design"
                                className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded"
                            />
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
                    </div>
                    <div className='w-[45%] flex flex-col gap-4'>
                        <div>
                            <h3 className="mb-1">Description</h3>
                            <textarea
                                cols="30"
                                rows="8"
                                placeholder="Task details..."
                                className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded resize-y"
                            ></textarea>
                        </div>
                        <button className='w-full border-2se border-emerald-600 h-15 rounded-md bg-emerald-500 font-semibold mt-2'>
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;