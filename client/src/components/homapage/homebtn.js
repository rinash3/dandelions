import React from 'react';
import "../share/UIbasics.css"
import "./style.css"

function Homebtn(props) {
    return (
        <button onClick={props.Click} className="homebtn black" style={props.style}>{props.text}</button>
    )
}


export default Homebtn;