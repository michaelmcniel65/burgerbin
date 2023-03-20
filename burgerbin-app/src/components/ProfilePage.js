import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import Navbar from "./common/Navbar";
import { toast } from "react-toastify";

export default function ProfilePage() {
    const auth = getAuth();
    const user = auth.currentUser;
    const [name, setName] = useState();
    const [proPic, setProPic] = useState('https://www.canbind.ca/canbindwebsitetest/wp-content/uploads/2018/04/blank-profile-picture-973460_640-300x300.png')
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;

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

    async function handleUpdate(event) {
        try {
            event.preventDefault();
            await updateProfile(auth.currentUser, {
                displayName: name, photoURL: proPic
            });
            return console.log(displayName)
        } catch(error) {
            if(error.code) {
                toast.error('An error has occurred.')
            }
        }
    }

    return (
        <div>
            <Navbar />
            Profile
            <button onClick={handleLogout}>Log out</button>
            <img className="w-auto h-auto" src={photoURL}/>
            <h1>{displayName}</h1>
            <h1>{email}</h1>
            <input type="text" placeholder="Username" onChange={e => setName(e.target.value)} />
            <button onClick={handleUpdate}>Submit</button>
            <button onClick={() => navigate('/home')}>go home</button>
        </div>
    )
}