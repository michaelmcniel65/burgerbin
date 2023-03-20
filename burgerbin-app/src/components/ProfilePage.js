import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Navbar from "./common/Navbar";

export default function ProfilePage() {
    const auth = getAuth();
    const user = auth.currentUser;
    const [name, setName] = useState('Anon');
    const [proPic, setProPic] = useState('https://www.canbind.ca/canbindwebsitetest/wp-content/uploads/2018/04/blank-profile-picture-973460_640-300x300.png')
    const displayName = name;
    const email = user.email;
    const photoURL = proPic;

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
            <Navbar page='PROFILE'/>
            Profile
            <button onClick={handleLogout}>Log out</button>
            <img className="w-auto h-auto" src={photoURL}/>
            <h1>{displayName}</h1>
            <h1>{email}</h1>
        </div>
    )
}