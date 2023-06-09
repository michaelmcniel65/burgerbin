import { CheckCircleOutline } from "@mui/icons-material";
import { ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { v4 as uuidv4 } from 'uuid'
import uploadFileProgress from "../../firebase/uploadFileProgress";
import addDocument from "../../firebase/addDocument";

export default function ProgressItem({file}) {
    const [progress, setProgress] = useState(100);
    const [imageURL, setImageURL] = useState(null);
    const currentUser = {uid:'userId'}
    useEffect(() => {
        const uploadImage = async() => {
            const imageName = uuidv4() + "." + file.name.split('.').pop()
            try {
                const url = await uploadFileProgress(
                    file,
                    `gallery/${currentUser.uid}`,
                    imageName,
                    setProgress
                )
                const galleryDoc = {
                    imageURL: url,
                    uid: currentUser.uid,
                    uEmail: 'test@test.com',
                    uName: 'Anon',
                    uPhoto: '',
                    imageId: imageName,
                    likes: 0,
                    dislikes: 0
                }
                await addDocument('gallery', galleryDoc, imageName)
                setImageURL(null);
            } catch (error) {
                alert(error.message)
                console.log(error)
            }
        }
        setImageURL(URL.createObjectURL(file))
        uploadImage();
    }, [file])
    return (
        imageURL && <ImageListItem cols={1} rows={1}>
            <img src={imageURL} alt="gallery" loading="lazy"/>
            <Box sx={backDrop}>
                {progress < 100 ? (
                    <CircularProgressWithLabel value={progress}/>
                ) : (
                    <CheckCircleOutline sx={{width: 60, height: 60, color: 'lightGreen'}} />
                )}
            </Box>
        </ImageListItem>
    )
}

const backDrop = {
    position:'absolute',
    top:0,
    right:0,
    bottom:0,
    left:0,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    background: 'rgba(0, 0, 0, .5)'
}