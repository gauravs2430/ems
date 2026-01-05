import React from "react";

const Header = ({data}) => {
  return (
    <div className="flex justify-between items-center text-white">
        <h1 className="text-2xl font-medium" >Hello  <br /> <span className="text-3xl font-semibold" >{data.firstname} 👋</span> </h1>
        <button id="LogOut" className="text-lg font-medium bg-red-500 text-white px-4 py-2 rounded-lg" >Log Out</button>
    </div>
  );
}

export default Header;