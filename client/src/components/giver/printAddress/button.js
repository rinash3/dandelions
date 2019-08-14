import React from 'react';
import "../../share/UIbasics.css"
import { Link } from "react-router-dom";
// import { PromiseProvider } from 'mongoose';

function Button(props) {

    return (

    <Link to={{pathname:"/giver/fills", state:{account:props.account}}} className="z-index beth">Fullfill another wish -></Link> )

}

export default Button;
