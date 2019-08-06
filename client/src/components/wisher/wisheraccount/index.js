import React, { Component } from "react";
import "../../share/UIbasics.css";
import "./style.css";
import Background from "./background";
import Button from "../../share/button"
import Checkbox from "./checkbox.js"

class Wisherfill extends Component {

    render() {
        return (
            <div >
                <Background />
                <div className="formbg container">
                    <h1 className="white">What do you wish to have?</h1>
                    <br /><br /><br />
                    <select className="custom-select" name="catagory">
                        <option value="category">Choose object catagory</option>
                        <option value="dresses">Dresses</option>
                        <option value="dolls">Dolls</option>
                        <option value="coats" >Coats</option>
                        <option value="shirts">Shirts</option>
                    </select>
                    <br /><br />
                    <label className="margin-left-5vw white helvatica"
                        htmlFor="objName">Object name:</label>
                    <label className="margin-left-5vw white helvatica"
                        htmlFor="objLink">Object link:</label>
                    <input className="white"></input>
                    <br />
                    <Checkbox />
                    <br />
                    <div className="margin-left-10vw">
                        <Button className="margin-left-10vw" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Wisherfill;