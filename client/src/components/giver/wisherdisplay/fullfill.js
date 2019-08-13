import React from "react";
import "./style.css";
import "../../share/UIbasics.css";

const Fullfill = (props) => {

const position={
    color:'yellow',
    fontFamily:'Beth Ellen',
    position:'absolute',
    marginTop:'20em',
    left:'35%'

}
return (

<button style={position} id={props.id} onClick={props.click}>Fullfill wish -></button>

)

}
export default Fullfill;