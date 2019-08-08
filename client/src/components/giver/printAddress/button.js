import React from 'react';
import "../../share/UIbasics.css"
import { Link } from "react-router-dom";

function Button() {
    return (
        <Link to="/giver" className="z-index beth">Fullfill another wish -></Link>
    );
}

export default Button;