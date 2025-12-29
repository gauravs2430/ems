import  react from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import Tasklist from "../TaskList/Tasklist.jsx";

const EmployeeDashboard = () => {
  return (
    <div className="p-20 h-screen bg-[#181818]">
      <Header/>
      <TaskListNumbers/>
      <Tasklist />
     </div>

  );
}

export default EmployeeDashboard;