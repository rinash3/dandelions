import React from "react";
import "./style.css";
import "../../share/UIbasics.css";


const InfoBox = (props) => {
    const infoBox={
        backgroundColor:"white",
        position: "absolute",
        width:"17em",
        border:"1px solid #8C1919",
        padding:"1em",
        height:"auto",
        margin:"10em 0 0 8em",
        display:"none"
    
}


return (
    <div  id="infoBox" key="key" style={infoBox} className="maroon infoBox">
    </div>
)

}
export default InfoBox;