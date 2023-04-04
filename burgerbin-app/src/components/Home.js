import React from "react";
import { useNavigate } from "react-router-dom";
import StandardImageList from "./common/ImageList";
import Navbar from "./common/Navbar";
import Upload from "./common/Upload";

export default function Home() {
    let navigate = useNavigate();

    return (
        <div>
            <Navbar />
            Home Page
            <button onClick={() => navigate('/profile')}>Profile</button>
            <Upload />
            <div className="flex justify-center">
                <StandardImageList />
            </div>
        </div>
    )
}

/*Need to start working on profile functionality, specifcally make a profile editor page adding for thursday*/