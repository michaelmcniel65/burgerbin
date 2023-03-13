import * as React from 'react';
import { Button } from '@mui/material';

export default function BasicButtons({title, handleAction}) {
    return (
        <Button variant='contained' onClick={handleAction} >{title}</Button>
    )
}