import { ImageList } from "@mui/material";
import React from "react";
import ProgressItem from "./ProgressItem";

export default function ProgressList({files}) {
    return (
        <ImageList rowHeight={200} cols={4}>
            {files.map((file, index) => (
                <ProgressItem file={file} key={index} />
            ))}
        </ImageList>
    )
}