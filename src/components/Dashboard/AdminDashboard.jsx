import React from 'react';
import Header from '../Others/Header.jsx';
import CreateTask from '../Others/CreateTask.jsx';
import AllTask from '../Others/AllTask.jsx';

const AdminDashboard = (props) => {

    // console.log(props);

    return (
        <div className='p-8 h-screen w-full'>
            <Header changeUser={props.changeUser} data = {props.data}/>
            <CreateTask changeUser={props.changeUser} data = {props.data} />
            <AllTask changeUser={props.changeUser} data = {props.data}/>
        </div>
    );
};

export default AdminDashboard;