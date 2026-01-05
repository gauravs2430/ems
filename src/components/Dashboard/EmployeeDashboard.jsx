import  react from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import Tasklist from "../TaskList/Tasklist.jsx";

const EmployeeDashboard = ({data}) => {
  // console.log(data.id);
  return (
    <div className="p-20 h-screen bg-[#181818]">
      <Header data={data}/>
      <TaskListNumbers data={data}/>
      <Tasklist data={data}/>
     </div>
  );
}

export default EmployeeDashboard;