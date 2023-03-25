import React, { useState } from "react";
import ProgressList from "../Upload/ProgressList";
import Form from "./Form";

export default function Upload() {
    const [files, setFiles] = useState([])
    return (
        <div>
            <Form setFiles={setFiles}/>
            <ProgressList files={files}/>
        </div>
    )
}