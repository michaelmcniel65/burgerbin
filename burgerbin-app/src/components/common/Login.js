import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material/';
import Button from './Button';

export default function BasicTextFields({title, setPassword, setEmail, handleAction}) {
    return (
        <div>
            <div className='heading-container'>
                <h3>
                    Login for fun!
                </h3>
            </div>
            
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="email" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} required/>
                <TextField id='password' label='Password' variant='outlined' onChange={(e) => setPassword(e.target.value)} required/>
            </Box>

            <Button title={title} handleAction={handleAction} />
        </div>
    );
}