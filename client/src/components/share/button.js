import React from "react";
import "./UIbasics.css"

function Button(props) {
    return(
        <button onClick={props.click}><h2>Next<span>-></span></h2></button>
    )
}

export default Button;