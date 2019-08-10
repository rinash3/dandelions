import React from 'react';
import "../../share/UIbasics.css"
import "./style.css"

function ContinueBtn(props) {
    const cont={
        width:"7em",
        padding:"5px 10px",
        background: "#6EC26C",
        borderRadius: "50px",
        cursor:"pointer",
        fontSize:'11px',
        color:'black'
    }
    
    return (
        <div className="bold" style={cont}> Address</div>
    );
}

export default ContinueBtn;