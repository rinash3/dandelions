import React from "react";
import "./style.css"


const Button = () => {
    var colors = ["#852D2D", "#6CC2BE", "#7D7AA2","#B90000","#E9B3B3"]
    var positions=["translateY(2vw)","translateY(4vw)","translateY(6vw)","translateY(8vw)","translateY(10vw)"]
    var marginleft=["1vw","2vw","4vw"]

    const color = {
        backgroundColor: colors[Math.floor(Math.random() * 5)],
        height: "15vw",
        width: "15vw",
        marginBottom:"8vw",
        marginLeft:marginleft[Math.floor(Math.random() * 3)],
        borderRadius: "50%",
        display: "inline-block",
        transform: positions[Math.floor(Math.random() * 5)]
    }
    
const hover={
    transform:'scale(1.2)'
}
    return (
        <div style={color} className="circle" onMouseEnter="hover"></div>
    )

}
export default Button;