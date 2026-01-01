import React, { createContext, useEffect } from 'react';
import { GetLocalStorage } from '../utils/LocalStorage';


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [userData, setUserData] = React.useState({
        employees: [],
        admin: []
    });

    useEffect(() => {
        // console.log({employees , admin})
        const data = GetLocalStorage();
        setUserData(data);
    }, [])

    return (
        <div>
            <AuthContext.Provider value={userData} >
                {children}
            </AuthContext.Provider >
        </div>
    );
};

export default AuthProvider;