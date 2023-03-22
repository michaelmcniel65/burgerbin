import React from 'react';
import { Fab, Input } from '@mui/material';
import { Add } from '@mui/icons-material'
import { useRef } from 'react';

export default function Form() {
    const fileRef = useRef()

    const handleClick = () => {
        fileRef.current.click()
    }

    return (
        <form>
            <Input type='file' sx={{display:'none'}}
                inputRef={fileRef}
            />
            <Fab color='primary' aria-label='add' onClick={handleClick}>
                <Add fontSize="large"/>
            </Fab>
        </form>
    )
}