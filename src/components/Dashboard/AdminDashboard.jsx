import React from 'react';
import Header from '../Others/Header.jsx';
import CreateTask from '../Others/CreateTask.jsx';
import AllTask from '../Others/AllTask.jsx';

const AdminDashboard = ({data}) => {

    // console.log(data);

    return (
        <div className='p-8 h-screen w-full'>
            <Header data = {data}/>
            <CreateTask data = {data} />
            <AllTask data = {data}/>
        </div>
    );
};

export default AdminDashboard;