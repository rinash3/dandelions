import React from "react";
import "./style.css";
import "../../share/UIbasics.css";


const Circle = (props) => {
    var colors = ["#852D2D", "#6CC2BE", "#7D7AA2", "#B90000", "#E9B3B3"]
    const color = {
        backgroundColor: colors[Math.floor(Math.random() * 5)],
        position:'absolute',
        borderRadius: "50%",
        display: "inline-block",
        left:props.left+'px',
        top:props.top+'px',
        border:'solid'
    }

    return (
        
            <div style={color} className={props.class} id={props.k} key={props.k} onMouseMove={props.MouseMove} onClick={props.Click} onMouseEnter={props.MouseEnter} onMouseLeave={props.MouseLeave}>
            </div>
    )

}
export default Circle;