import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Background from "./background";
import Button from "./button";
import Print from "./print"

class PrintAddress extends Component {


    render() {
        return (
            <div>
                <Button/>
                <Background />
                <Print/>
            </div>
        )
    }
}
export default PrintAddress;