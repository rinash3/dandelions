import React, { Component } from "react"
import "../../share/UIbasics.css"
import "./style.css"
// import Background from "./background"
import Button from "../../share/button"
// import Checkbox from "./checkbox.js"
import Category from "../../share/catagory"


class Wisherfill extends Component {


    render() {
        return (
            <div >
                {/* <Background /> */}
                <div className="formbg container">
                    <h1 className="black">What do you wish to have?</h1>
                    <br /><br /><br />
                    <Category />
                    <br /><br />
                    <label className="margin-left-5vw black helvatica"
                        htmlFor="objName">Object name:</label>
                    <input className="black"></input>
                    <br></br>
                    <label className="margin-left-5vw black helvatica"
                        htmlFor="objLink">Object link:</label>
                    <input className="black"></input>
                    <br />
                    <br />
                    <br></br>
                    <h3 className="margin-left-5vw black helvatica">Tell us a little about why you want it?*</h3>
                    <br></br>
                    <br></br>
                    <textarea className="text margin-left-5vw black helvatica">
                        My prom is in 3 weeks and i need i nice dress </textarea>
                    <div className="margin-left-10vw">
                        <Button />
                    </div>
                </div>
            </div>
        );
    }
}
export default Wisherfill;