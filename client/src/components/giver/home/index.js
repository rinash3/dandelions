import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Button from "../../share/button"
import Giverhomepagebg from "./giverhomepagebg"
import axios from "axios"
import API from "../../../utils/API"
class Giverhome extends Component {
    state={
        email:"",
        password:""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    click = event =>{
        event.preventDefault();
        axios.get()
    }
    render() {
        return (
            
            <div>
                <Giverhomepagebg/>
                <form className="hp-form">
                    <h1 className="white hp-h1">Fullfill a wish</h1>
                    <a className="white size-28" href="/wisher">Make a wish</a>    
                    <label className="white beth" htmlFor="email">Email:</label>
                    <input onChange={this.handleInputChange} id="giverEmail" name="email" className="white" type="email"></input>
                    <br/>
                    <label className="white beth" htmlFor="password">Password:</label>
                    <input  onChange={this.handleInputChange} id="giverPassword" name="password" className="white" type="text"></input>
                    <br/><br/>
                    <Button click={this.click}/>
                </form>
            </div>
        );
    }
}

export default Giverhome;