import React from 'react';
import Header from '../Others/Header.jsx';
import CreateTask from '../Others/CreateTask.jsx';
import AllTask from '../Others/AllTask.jsx';

const AdminDashboard = () => {
    return (
        <div className='p-8 h-screen w-full'>
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    );
};

export default AdminDashboard;