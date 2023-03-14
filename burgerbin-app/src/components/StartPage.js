import React from "react";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
    let navigate = useNavigate();

    return (
    <>
        
        <button className="start-button text-white bg-gradient-to-r from-red-400 
            via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 
            focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 
            shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 
            font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() => navigate('/login')}>LOGIN</button>

        <button className="start-button text-white bg-gradient-to-r from-blue-500 
            via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 
            focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
            shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 
            font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() => navigate('/register')}>SIGN UP</button>
    </>
    )
}