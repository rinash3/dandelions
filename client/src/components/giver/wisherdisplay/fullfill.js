import React from "react";
import "./style.css";
import "../../share/UIbasics.css";
import { Link } from "react-router-dom";

const Fullfill = (props) => {


return (
<Link id={props.id} to="/giver/connect">Fullfill wish -></Link>
)

}
export default Fullfill;