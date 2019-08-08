import React from "react";
import "./UIbasics.css"
import { Link } from "react-router-dom";


function Button(props) {
    return(
        <Link to={props.location} style={props.style} className={props.className} onClick={props.click}><h2>Next -></h2></Link>
    )
}

export default Button;
