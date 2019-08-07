import React from 'react';
import "../../share/UIbasics.css"
import "./style.css"

function ContinueBtn(props) {
    const cont={
        width:"8em",
        padding:"5px 10px",
        background: "#6EC26C",
        borderRadius: "50px",
        cursor:"pointer"
    }
    
    return (
        <div className="size-18 bold" style={cont}> Print address</div>
    );
}

export default ContinueBtn;