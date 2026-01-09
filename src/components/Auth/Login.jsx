import React, { useEffect, useState } from "react";

const clearuser = () => {
    localStorage.setItem("loggedInUser" , "");
}

const Login = ({ handleLogin }) => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    clearuser() ; 

    const SubmitHandler = (e) => {
        e.preventDefault();
        handleLogin(Email, Password);
        // console.log("Form Submitted");
    }
    return (
        <div className="h-screen w-screen justify-center items-center flex">
            <div className="login-page border-2 border-emerald-500 rounded-2xl p-20">
                <form
                    onSubmit={(e) => {
                        SubmitHandler(e);
                    }
                    }
                    className="m-12 flex flex-col gap-2 justify-center items-center" action="">
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required className="text-white border-2 border-emerald-500 rounded-full bg-transparent placeholder:text-gray-400 placeholder:bg-transparent p-3" type="email" placeholder="Enter Email" name="" id=""
                    />

                    <input
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required className="text-white border-2 border-emerald-500 rounded-full bg-transparent placeholder:text-gray-400 p-3 placeholder:bg-transparent" type="password" placeholder="Enter Password" name="" id=""
                    />
                    <button className="emr-button w-[35%] text-white rounded-full p-2" type="submit">Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;