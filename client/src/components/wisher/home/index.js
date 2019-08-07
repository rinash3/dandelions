import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Button from "../../share/button"



class Wisherhome extends Component {
    render() {
        return (
            <div className="background container">
                <form>
                    <h1 className="black">Make your wish</h1>
                    <a className="black" href="/">Fullfill a wish</a>
                    <label className="black beth" for="Name">Name:</label>
                    <input id="Name" name="Name" className="black" type="text"></input>
                    <br />
                    <label className="black beth" for="password">Password:</label>
                    <input id="password" name="password" className="black" type="password"></input>
                    <br /><br />
                    <Button />
                </form>
            </div>
        );
    }
}

export default Wisherhome;