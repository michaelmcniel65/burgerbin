import { CheckCircleOutline } from "@mui/icons-material";
import { ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

export default function ProgressItem({file}) {
    const [progress, setProgress] = useState(50);
    const [imageURL, setImageURL] = useState(null);
    useEffect(() => {
        setImageURL(URL.createObjectURL(file))
    }, [file])
    return (
        <ImageListItem cols={1} rows={1}>
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