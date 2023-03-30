import * as React from 'react';
import deleteFile from '../../firebase/deleteFile';
import deleteDocument from '../../firebase/deleteDocument';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export default function ImageOptions({imageId}) {
const currentUser = { uid: 'userId' };
const handleDelete = async () => {
    try {
    await deleteDocument('gallery', imageId);
    await deleteFile(`gallery/${currentUser.uid}/${imageId}`);
    } catch (error) {
    alert(error.message);
    console.log(error);
    }
};
return (
    <>
        <IconButton onClick={handleDelete} aria-label='delete'>
            <DeleteIcon />
        </IconButton>
    </>
);
}