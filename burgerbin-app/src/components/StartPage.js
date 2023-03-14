import React from "react";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
    let navigate = useNavigate();

    return (
    <>
        <div className="start-background z-[-1] absolute w-screen h-screen 
            bg-gradient-to-tl from-yellow-600 to-red-600"></div>
        
        <div className="border flex flex-row">
            <div className="column-1 flex flex-col">
                <div className="information-div">
                    <img className="p-5" 
                    src="./burgerbinlogo.png"
                    />
                    <div className="flex flex-col items-center">
                        <h1 className="text-6xl p-5 text-white">A social media site for burgers...by burgers.</h1>
                        <img className="w-10/12 h-10/12 p-3"
                        src="./startburger.png"
                        />
                    </div>
                </div>
            </div>
            <div className="column-2 flex flex-col border">
                <div className="button-div border">
                    <button className="start-button text-white bg-gradient-to-r from-blue-400 
                        via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 
                        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                        shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 
                        font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={() => navigate('/login')}>LOGIN</button>

                    <button className="start-button text-white bg-gradient-to-r from-teal-500 
                        via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 
                        focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 
                        shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 
                        font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={() => navigate('/register')}>SIGN UP</button>
                </div>
            </div>
        </div>
    </>
    )
}