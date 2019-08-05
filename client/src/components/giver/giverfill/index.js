import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import sample from './background.mp4';
import Background from "./background";
import Button from "../../share/button"
// import Checkbox from "./checkbox"


class Giverfill extends Component {

    render() {
        return (
            <div>
                <Background src={sample} />
                <div className="container">
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
                    {/* <Checkbox/> */}
                    <Button/>
                </div>
            </div>
        );
    }
}
export default Giverfill;