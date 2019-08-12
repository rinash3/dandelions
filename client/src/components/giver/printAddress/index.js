import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Background from "./background";
import Button from "./button";
import Print from "./print"

class PrintAddress extends Component {


    render() {
        const page={
            position:'fixed'
        }
        return (
            <div >
                <Button/>
                <Background style={page}/>
                <Print/>
            </div>
        )
    }
}
export default PrintAddress;