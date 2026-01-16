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

  useEffect(() => {
    // localStorage.clear(); 
    // SetLocalStorage();
  }, [authData]);


  const loggedInUser = localStorage.getItem('loggedInUser');
  useEffect(() => {

    // console.log(loggedInUser);
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      // console.log(userData)
      // console.log(userData.role);
    }
    else {
      // console.log("UserLoggedIn Nahi Hai");
    }
  }, [loggedInUser]);


  const [User, SetUser] = React.useState(null);
  const [LoggenInUserData, SetLoggedInUserData] = React.useState(null);

  // console.log(authData.employees);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      SetUser('admin');
      const admin = (authData.admin.find((e) => e.email == email && e.password == password));
      SetLoggedInUserData(admin);
      // console.log(admin);
      // console.log(authData.admin);

      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin', data: admin }));
    }
    else {
      if (authData) {
        const employee = (authData.employees.find((e) => e.email == email && e.password == password));
        if (employee) {
          SetUser('employee');
          SetLoggedInUserData(employee);
          console.log(employee);
          localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data: employee }));
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
      {User === 'admin' ? <AdminDashboard changeUser={SetUser} data={LoggenInUserData} /> : (User == "employee" ? <EmployeeDashboard changeUser={SetUser} data={LoggenInUserData}
      /> : null)}
    </>
  );
}

export default App;
