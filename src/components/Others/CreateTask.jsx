import React from 'react';

const CreateTask = () => {

    const [taskTitle, settaskTitle] = React.useState("");
    const [taskDescription, settaskDescription] = React.useState("");
    const [taskDate, settaskDate] = React.useState("");
    const [assignTo, setassignTo] = React.useState("");
    const [category, setcategory] = React.useState("");

    // const [newTask , setNewTask] = React.useState({});


    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(e.target);
        // console.log("Task Created");
        // console.log(taskTitle , taskDescription , taskDate , assigtTo , category ) ; 

        settaskTitle("");
        settaskDescription("");
        settaskDate("");
        setassignTo("");
        setcategory("");

        const task = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: true,
            completed: false,
        };

        // console.log(task);                                                                        

        const data = JSON.parse(localStorage.getItem("employees"));

        // console.log(data);

        data.forEach((e) => {
            if (e.firstname === assignTo) {
                // console.log(e);
                // console.log(e.tasks);
                e.tasks.push(task);
                e.taskCounts.newTask += 1 ; 
            }
        });

        localStorage.setItem("employees" , JSON.stringify(data));

        // console.log(data)
    }

    return (
        <div>
            <div className='pt-12 text-white'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                        // console.log(e.target);

                    }} className='flex justify-between gap-6 border-1 border-emerald-300 p-8 rounded-xl'>
                    <div className='w-[45%] flex flex-col gap-4'>
                        <div>
                            <h3 className="mb-1">Task Title</h3>
                            <input
                                required
                                value={taskTitle}
                                onChange={(e) => {
                                    // console.log(e.target.value);
                                    settaskTitle(e.target.value)
                                }}
                                type="text"
                                placeholder="Make a UI design"
                                className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded"
                            />
                        </div>
                        <div>
                            <h3 className="mb-1">Date</h3>
                            <input
                                required
                                value={taskDate}
                                onChange={(e) => {
                                    // console.log(e.target.value);
                                    settaskDate(e.target.value)
                                }}
                                type="date"
                                className="w-full bg-transparent border border-gray-600 text-white px-3 py-2 rounded"
                            />
                        </div>
                        <div>
                            <h3 className="mb-1">Assign To</h3>
                            <input
                                required
                                value={assignTo}
                                onChange={(e) => {
                                    // console.log(e.target.value);
                                    setassignTo(e.target.value)
                                }}
                                type="text"
                                placeholder="Employee name"
                                className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded"
                            />
                        </div>
                        <div>
                            <h3 className="mb-1">Category</h3>
                            <input
                                required
                                value={category}
                                onChange={(e) => {
                                    // console.log(e.target.value);
                                    setcategory(e.target.value)
                                }}
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
                                required
                                value={taskDescription}
                                onChange={(e) => {
                                    // console.log(e.target.value);
                                    settaskDescription(e.target.value)
                                }}
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