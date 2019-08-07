import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Button from "../../share/button"
import Giverhomepagebg from "./giverhomepagebg"
class Giverhome extends Component {
    state={
        email:"",
        password:""
    }
    click = event =>{
        event.preventDefault();
        $.get()
    }
    render() {
        return (
            
            <div>
                <Giverhomepagebg/>
                <form className="hp-form">
                    <h1 className="white hp-h1">Fullfill a wish</h1>
                    <a className="white size-28" href="/">Make a wish</a>
                    <label className="white beth" htmlFor="giverName">Name:</label>
                    <input id="giverName" name="giverName" className="white" type="text"></input>
                    <br/>
                    <label className="white beth" htmlFor="giverEmail">Email:</label>
                    <input id="giverEmail" name="giverEmail" className="white" type="email"></input>
                    <br/><br/>
                    <Button click={this.click}/>
                </form>
            </div>
        );
    }
}

export default Giverhome;