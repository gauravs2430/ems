import React from "react";
import { SetLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {

  // console.log(data);

const logOutUser = ()=> {
  localStorage.setItem("loggedInUser" , '' );
  // console.log(props.changeUser);
  props.changeUser("");
  // window.location.reload() ;
}

  return (
    <div className="flex justify-between items-center text-white">
        <h1 className="text-2xl font-medium" >Hello  <br /> <span className="text-3xl font-semibold" > {props.data.firstname} 👋</span> </h1>
        <button onClick={logOutUser} id="LogOut" className="text-lg font-medium bg-red-500 text-white px-4 py-2 rounded-lg" >Log Out</button>
    </div>
  );
}

export default Header;