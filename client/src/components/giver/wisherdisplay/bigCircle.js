import React from "react";
import "./style.css";
import "../../share/UIbasics.css";


const BigCircle = (props) => {


    return (
        <div>
            <div className="bigCircle" id={props.id}>
                <div onClick={props.closeC} className="cross">x</div>
                <div id="contentC"></div>
            </div>
            <div className="circle-bg" id="theOneBG"></div>
        </div>
    )

}
export default BigCircle;