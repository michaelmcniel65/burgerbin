import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';
import { Delete, MoreVert } from '@mui/icons-material';
import deleteFile from '../../firebase/deleteFile';
import { db } from '../../firebase/firebase-config';
import { deleteDoc, doc, getDoc, collection } from 'firebase/firestore';
import deleteDocument from '../../firebase/deleteDocument';

export default function ImageOptions() {
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const currentUser = { uid: 'userId' };
const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
const handleClose = () => {
    setAnchorEl(null);
};
const handleDelete = async () => {
    const collectionTest = collection(db, 'gallery');
    const newDocRef = doc(collectionTest);
    const newDocId = newDocRef.id
    console.log(newDocId)
    try {
    await deleteDocument('gallery', newDocId);
    await deleteFile(`gallery/${currentUser.uid}/${newDocId}`);
    } catch (error) {
    alert(error.message);
    console.log(error);
    }
};
return (
    <React.Fragment>
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Options">
        <IconButton
            onClick={handleClick}
            sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            color: 'white',
            background: 'rgba(0,0,0,.3)',
            }}
        >
            <MoreVert fontSize="large" />
        </IconButton>
        </Tooltip>
    </Box>
    <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
        elevation: 0,
        sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
            },
            '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
            },
        },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
        <MenuItem onClick={handleDelete}>
        <ListItemIcon>
            <Delete />
        </ListItemIcon>
        Delete
        </MenuItem>
    </Menu>
    </React.Fragment>
);
}