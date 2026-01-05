import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import TaskListNumbers from "./components/Others/TaskListNumbers.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { GetLocalStorage, SetLocalStorage } from "./utils/LocalStorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";
// import { useContext } from "react";

const App = () => {

  const authData = useContext(AuthContext);

  useEffect (()=>{
    // localStorage.clear(); 
    SetLocalStorage();   
  },[authData])

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    // console.log(loggedInUser);
    if(loggedInUser){
      console.log("UserLoggedIn Hai")

    }
    else{
      console.log()
    }

  }, [])

  const [User, SetUser] = React.useState(null);
  const [LoggenInUserData , SetLoggedInUserData ] = React.useState(null);
  

  // console.log(authData.employees);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      SetUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin'}));
    }
    else {
      if (authData) {
        const employee = (authData.employees.find((e) => e.email == email && e.password == password));
        if(employee){
          SetUser('employee');
          SetLoggedInUserData(employee);
          // console.log(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee'}));
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
