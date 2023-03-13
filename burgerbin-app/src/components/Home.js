import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }
        if (!authToken) {
            navigate('/login')
        }
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    return (
        <div>
            Home Page
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}