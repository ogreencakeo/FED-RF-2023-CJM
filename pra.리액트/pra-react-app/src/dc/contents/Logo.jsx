import React from "react";
import {isrc} from '../data/imgSrc.js';

export const Logo =() => {
    const myStyle = {
        width:"81px",
        height:"81px",
        backgroundImage:"linear-gradient(45deg, #88f62f, #fa8104)",
        borderRadius:"50%"
    };

    return(
        <h1 style={myStyle}>
            <img src={isrc.logo} alt="DC logo" 
            style={{width : '81px'}}/>
        </h1>
    )
}