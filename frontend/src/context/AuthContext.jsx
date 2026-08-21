import { createContext, useContext, useState } from "react";
import { getUser, getToken } from "../utils/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(getUser());

    const [token, setToken] = useState(getToken());

    function login(userData, tokenData) {

        setUser(userData);

        setToken(tokenData);

    }

    function logout() {

        setUser(null);

        setToken(null);

    }

    return (

        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                isAuthenticated: !!token,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}