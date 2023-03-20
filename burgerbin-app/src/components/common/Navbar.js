import * as React from 'react';

export default function Navbar({ page }) {
    return (
        <>
        <div>
            <h1>Logo goes here</h1>
            <h1>{page}</h1>
        </div>
        </>
    )
}