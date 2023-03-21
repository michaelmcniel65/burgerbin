import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import Navbar from "./common/Navbar";
import { toast } from "react-toastify";
import { async } from "@firebase/util";

export default function ProfilePage() {
    const auth = getAuth();
    const user = auth.currentUser;
    const [name, setName] = useState(user?.displayName);
    const [photoURL, setPhotoURL] = useState(user?.photoURL)
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const displayName = user.displayName;
    const email = user.email;
    const profilePic = user.photoURL;

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

    const handleChange = (e) => {
        const file = e.target.files[0]
        if(file) {
            setFile(file)
            setPhotoURL(URL.createObjectURL(file))
        }
    }

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        let userObj = {displayName: name}
        try {

        } catch (error) {

        }
        setLoading(false)
    }

    /*this is where you left off. 15:00 mark on video "code like pro react updating user profile part 4" */

    async function handleUpdate(event) {
        try {
            event.preventDefault();
            await updateProfile(auth.currentUser, {
                displayName: name, photoURL: photoURL
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
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" required value={name || ""} onChange={e => setName(e.target.value)} />
                <input type="file" accept="image/*" onChange={handleChange} />
            </form>
            
            <button onClick={() => navigate('/home')}>go home</button>
        </div>
    )
}