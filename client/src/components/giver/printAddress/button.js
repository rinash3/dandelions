import React from 'react';
import "../../share/UIbasics.css"
import { Link } from "react-router-dom";

function Button() {

    return (
        <Link to="/giver/fills" className="z-index beth giver-print-left">Fullfill another wish -></Link>
    );
}

export default Button;