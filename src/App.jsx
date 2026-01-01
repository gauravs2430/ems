import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import TaskListNumbers from "./components/Others/TaskListNumbers.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { GetLocalStorage, SetLocalStorage } from "./utils/LocalStorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";
// import { useContext } from "react";

const App = () => {

  // useEffect (()=>{
  //   SetLocalStorage();   
  //   GetLocalStorage();
  // },[])

  const [User, SetUser] = React.useState(null);
  const [LoggenInUserData , SetLoggedInUserData ] = React.useState(null);
  const authData = useContext(AuthContext);


  // console.log(authData.employees);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInIUser = localStorage.getItem("loggedInUser");
  //   }
  // }, [authData])

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      SetUser('admin');
      localStorage.setItem("LogedInUser", JSON.stringify({role: 'admin'}) );
    }
    else {
      if (authData) {
        const employee = (authData.employees.find((e) => e.email == email && e.password == password));
        if(employee){
          SetUser('employee');
          SetLoggedInUserData(employee);
          // console.log(employee);
        localStorage.setItem("LogedInUser", JSON.stringify({role: 'employee'}));
        }
        
      }
      else {
        alert("Invalid Credentials , Try again");
      }
    }
  }

  return (
    <>
      {!User ? <Login handleLogin={handleLogin} /> : ''}
      {User === 'admin' ? <AdminDashboard />:(User=="employee" ? <EmployeeDashboard 
      data={LoggenInUserData}
      />:null)}
    </>
  );
}

export default App;
