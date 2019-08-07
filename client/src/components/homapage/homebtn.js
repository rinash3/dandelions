import React from 'react';
import "../share/UIbasics.css"
import "./style.css"
import {Link} from "react-router-dom";

function Homebtn(props) {
    return (
        <Link to={props.location} className="homebtn black" style={props.style}>{props.text}</Link>
    )
}


export default Homebtn;