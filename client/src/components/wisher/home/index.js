import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Button from "../../share/button"

class Wisherhome extends Component {
    render() {
        return (
            <div className="background container">
                <form>
                    <h1 className="white">Make your wish</h1>
                    <a className="white" href="/">Fullfill a wish</a>
                    <label className="white beth" for="Name">Name:</label>
                    <input id="Name" name="Name" className="white" type="text"></input>
                    <br />
                    <label className="white beth" for="password">Password:</label>
                    <input id="password" name="password" className="white" type="password"></input>
                    <br /><br />
                    <Button />
                </form>
            </div>
        );
    }
}

export default Wisherhome;