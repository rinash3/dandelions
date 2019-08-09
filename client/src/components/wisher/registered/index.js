import React, { Component } from "react"
import "../../share/UIbasics.css"
import "./style.css"
import Button from "../../share/button"
import Checkbox from "./checkbox.js"
import Category from "../../share/catagory"
class Wisherfill extends Component {

    render() {
        return (
            <div >
                <div className="formbg container">
                    <h1 className="white">What do you wish to have?</h1>
                    <br /><br /><br />
                    <Category />
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
                        <Button />
                    </div>
                </div>
            </div>
        );
    }
}
export default Wisherfill;