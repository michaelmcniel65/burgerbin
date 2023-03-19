import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/profile')
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
            Profile
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}