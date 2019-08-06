import React from "react";
import "./style.css";
import "../../share/UIbasics.css";


const BigCircle = (props) => {

    const bigCircle = {
        height: "55em",
        width: "55em",
        borderRadius: "50%",
        zIndex: "10",
        top: "7em",
        left: "20%",
        right: "20%",
        position: "absolute"
    }

    return (
        <div>
            <div style={bigCircle} id={props.id}>
                <div onClick={props.closeC} className="cross">x</div>
                <div id="contentC"></div>
            </div>
            <div className="circle-bg" id="theOneBG"></div>
        </div>
    )

}
export default BigCircle;