import React from "react";
import { useNavigate } from "react-router-dom";
import Form from '../components/common/Form';
import { Button } from "@mui/material";

export default function StartPage() {
    let navigate = useNavigate();

    return (
    <>
        <button onClick={() => navigate('/login')}>login</button>
        <button onClick={() => navigate('/register')}>register</button>
    </>
    )
}