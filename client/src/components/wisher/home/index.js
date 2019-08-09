import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Button from "../../share/button"
import "../../wisher/home/style.css"
import Wisherhomebg from "./wisherhomebg"



class Wisherhome extends Component {
    render() {
        return (

            <div className="background z-index-upup container">

                <form>
                    <h1 className="black">Make your wish</h1>
                    <br></br>
                    <br></br>
                    <a className="black" href="/">Fullfill a wish</a>
                    <label className="black beth" for="Name">Name:</label>
                    <input id="Name" name="Name" className="black" type="text"></input>
                    <br />
                    <label className="black beth" for="password">Password:</label>
                    <input id="password" name="password" className="black" type="password"></input>
                    <br /><br />
                    <Button className="black beth" location="/wisher/register"/>
                </form>
                <Wisherhomebg />
            </div>

        );
    }
}

export default Wisherhome;