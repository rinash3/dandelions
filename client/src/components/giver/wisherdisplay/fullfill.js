import React from "react";
import "./style.css";
import "../../share/UIbasics.css";
import { Link } from "react-router-dom";

const Fullfill = (props) => {

const position={
    color:'yellow',
    fontFamily:'Beth Ellen',
    position:'absolute',
    marginTop:'20em',
    left:'35%'

}
return (
<Link style={position} id={props.id} to="/giver/connect">Fullfill wish -></Link>
)

}
export default Fullfill;