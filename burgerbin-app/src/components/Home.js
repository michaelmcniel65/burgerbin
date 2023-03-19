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

/*Need to start working on profile functionality, specifcally make a profile editor page*/