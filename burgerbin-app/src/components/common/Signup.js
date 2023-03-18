import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material/';
import Button from './Button';

export default function BasicTextFields({title, setPassword, setEmail, handleAction}) {
    let navigate = useNavigate();
    return (
        <>
        <div className="start-background z-[-1]
            bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"></div>
        <div className='heading-container text-4xl text-white pt-20 pb-7'>
            <h3 className='pb-10'>
                Hello! Please <span className='font-bold'>SIGN UP</span> to continue.
            </h3>
            <button className='start-button text-white bg-gradient-to-r from-blue-400 
                            via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 
                            focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                            shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 
                            font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2' 
                            onClick={() => navigate('/')}>GO BACK</button>
        </div>
        <div className='flex justify-center items-center'>
            <div className='rounded-2xl bg-white flex justify-center items-center w-[27rem] h-[30rem]'>
                <div>
                    <img
                    className='w-[15rem] h-auto'
                    src='https://thumbs.gfycat.com/SmoothIdolizedAllosaurus-size_restricted.gif'
                    alt='a floating burger'
                    />
                    <p>Already have an account? <span className='underline'><Link to='/login'>Login here!</Link></span></p>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="email" type='email' label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} required/>
                        <br/>
                        <TextField id='password' type='password' label='Password' variant='outlined' onChange={(e) => setPassword(e.target.value)} required/>
                    </Box>

                    <Button title={title} handleAction={handleAction} />
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="pt-10 pb-[10rem] h-20 text-center text-white w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        </>
    );
}