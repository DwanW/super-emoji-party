import React from 'react';
import { useState } from 'react';

export default function Menu ({playerChange}) {
    const pChange = (num) => {
        playerChange(num);
    }

    return (
        <React.Fragment>
            <div>
                <button onClick={()=>pChange(2)}>Two Player</button>
                <button onClick={() =>pChange(3)}>Three Player</button>
            </div>
        </React.Fragment>
    )
}