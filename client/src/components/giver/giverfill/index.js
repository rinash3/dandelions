import React, { Component } from "react";
import "../../share/UIbasics.css";
import "./style.css";
import Background from "./background";
import Button from "../../share/button"
import Checkbox from "./checkbox.js"

class Giverfill extends Component {

    render() {
        return (
            <div >
                <Background  />
                <div className="formbg container">
                    <h1 className="white">What do you want to give?</h1>
                    <br /><br /><br />
                    <select className="custom-select" name="catagory">
                        <option value="volvo">Select object catagory</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat" >Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                    <br /><br />
                    <label className="margin-left-5vw white helvatica"
                        htmlFor="objName">Object name:</label>
                    <input className="white"></input>
                    <br/>
                    <Checkbox/>
                    <br/>
                    <div className="margin-left-10vw">
                    <Button className="margin-left-10vw"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Giverfill;