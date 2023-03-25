import * as React from 'react';
import { getAuth } from "firebase/auth";

export default function Navbar() {
    const auth = getAuth();
    const user = auth.currentUser;
    return (
        <>
        <div className='flex flex-row bg-gray-800'>
            <div className='flex flex-row w-[25rem] justify-between items-center'>
                <img className='w-[15rem] h-auto p-5'
                src='/burgerbinlogo.png'
                alt='burgerbin logo'
                />
                <h1 className='text-white text-3xl pl-10 pr-5'>HOME</h1>
                <h1 className='text-white text-3xl pr-5'>PROFILE</h1>
                <h1 className='text-white text-3xl pr-5'>GAMES</h1>
            </div>
        </div>
        </>
    )
}