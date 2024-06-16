import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user_id, setUserId] = useState(localStorage.getItem('user_id') || null);

    useEffect(() => {
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', user_id);
    }, [token]);

    function logout() {
        setToken(null);
        setUserId(null);
    }

    return (
        <AuthContext.Provider value={{ token, setToken, user_id, setUserId, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;