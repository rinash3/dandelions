import React from "react";
import "./UIbasics.css"

function Button(props) {
    return(
        <button onClick={props.click}><h2>Next -></h2></button>
    )
}

export default Button;