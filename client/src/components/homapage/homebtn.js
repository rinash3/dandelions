import React from 'react';
import { Link } from "react-router-dom";
import "../share/UIbasics.css"
import "./style.css"
import {Link} from "react-router-dom";

function Homebtn(props) {
    return (
        <Link to={props.location} onClick={props.Click} className="homebtn black" style={props.style}>
            {props.text}
        </Link>
    )
}


export default Homebtn;