import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Button from "../../share/button"

class Giverhome extends Component {

    render() {
        return (
            <div className="background container">
                <form>
                    <h1 className="white">Fullfill a wish</h1>
                    <a className="white" href="/">Make a wish</a>
                    <label className="white beth" for="giverName">Name:</label>
                    <input id="giverName" name="giverName" className="white" type="text"></input>
                    <br/>
                    <label className="white beth" for="giverEmail">Email:</label>
                    <input id="giverEmail" name="giverEmail" className="white" type="email"></input>
                    <br/><br/>
                    <Button />
                </form>
            </div>
        );
    }
}

export default Giverhome;