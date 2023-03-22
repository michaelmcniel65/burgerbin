import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StandardImageList from "./common/ImageList";
import Navbar from "./common/Navbar";
import Upload from "./common/Upload";

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
            <Navbar />
            Home Page
            <button onClick={handleLogout}>Log out</button>
            <button onClick={() => navigate('/profile')}>Profile</button>
            <Upload />
            <div className="flex justify-center">
                <StandardImageList />
            </div>
        </div>
    )
}

/*Need to start working on profile functionality, specifcally make a profile editor page*/