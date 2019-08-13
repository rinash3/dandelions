import React from "react";
import "./style.css";
import "../../share/UIbasics.css";


const Circle = (props) => {
    var colors = ["#852D2D", "#6CC2BE", "#7D7AA2", "#B90000", "#E9B3B3"]
    var selected = [];
    
    for (var j=0; j<props.k; j++) {
        while (true) {
            var x0 = 50+Math.floor(Math.random() * (window.innerWidth-300));
            var y0 =300+ Math.floor(Math.random() * (window.innerHeight-600));
            var x1 = x0 + 250;
            var y1 = y0 + 250;
            var i = 0;
            while (i < selected.length &&
                   (x0 >= selected[i].x1 ||
                    y0 >= selected[i].y1 ||
                    x1 <= selected[i].x0 ||
                    y1 <= selected[i].y0)) {
                i++;
            }
            if (i === selected.length) {
                selected.push({x0:x0, y0:y0, x1:x1, y1:y1});
                break;
            }
        }
    }
    const color = {
        backgroundColor: colors[Math.floor(Math.random() * 5)],
        position:'absolute',
        borderRadius: "50%",
        display: "inline-block",
        left:x0+'px',
        top:y0+"px",
        border:'solid'
    }

    return (
        
            <div style={color} className={props.class} id={props.k} key={props.k} onMouseMove={props.MouseMove} onClick={props.Click} onMouseEnter={props.MouseEnter} onMouseLeave={props.MouseLeave}>
            </div>
    )

}
export default Circle;