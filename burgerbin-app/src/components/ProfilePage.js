import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import Navbar from "./common/Navbar";
import { toast } from "react-toastify";
import { async } from "@firebase/util";
import { Avatar } from '@mui/material';

export default function ProfilePage() {
    const [currentUser, setCurrentUser] = useState({
        email: 'test@test.com',
        displayName: 'Anon',
        photoURL: ''
    })

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

    /*this is where you left off. 15:00 mark on video "code like pro react updating user profile part 4" */
    /*Need to watch part 1 and stuff */

    return (
        <div>
            <Navbar />
            Profile
            <button onClick={handleLogout}>Log out</button>
            <Avatar src={currentUser?.photoURL}>
                {currentUser?.displayName?.charAt(0)?.toUpperCase() || 
                currentUser?.email?.charAt(0)?.toUpperCase()}
            </Avatar>
            <h1>test</h1>
            <h1>test</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="file" accept="image/*" />
            </form>
            
            <button onClick={() => navigate('/home')}>go home</button>
        </div>
    )
}