import  react from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import Tasklist from "../TaskList/Tasklist.jsx";

const EmployeeDashboard = (props) => {

  return (
    <div className="p-20 h-screen bg-[#181818]">
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers changeUser={props.changeUser} data={props.data}/>
      <Tasklist changeUser={props.changeUser} data={props.data}/>
     </div>
  );

}

export default EmployeeDashboard;