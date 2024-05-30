import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";
import { Login } from "../components/Login";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect (() => {
        const id = localStorage.getItem("id");
        if(id)
            setIsAuthenticated(true);
    }, []);
    return isAuthenticated;
}

export const ProtectedRoutes = () => {
    const isAuth = useAuth();   // true or false
    return(
        isAuth ? <Outlet /> : <Login />
    )
};