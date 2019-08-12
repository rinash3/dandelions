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
<<<<<<< HEAD


=======
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
>>>>>>> 30e07fb143d81c68adec8e9630687b23e062c9fb
    render() {
        const position={
            marginRight:'30vw',
            marginTop:'45em'
        }
        const someMargin={
            marginBottom:'2em'
        }

        return (
            
            <div>
                <Giverhomepagebg/>
                <form className="hp-form">
<<<<<<< HEAD
                    <h1 style={someMargin} className="white">Fullfill a wish</h1>
                    <a className="white size-28" href="/">Make a wish</a>
                    <label className="white beth" htmlFor="giverName">Name:</label>
                    <input id="giverName" name="giverName" className="white" type="text"></input>
=======
                    <h1 className="white hp-h1">Fullfill a wish</h1>
                    <a className="white size-28" href="/">Make a wish</a>    
                    <label className="white beth" htmlFor="email">Email:</label>
                    <input onChange={this.handleInputChange} id="giverEmail" name="email" className="white" type="email"></input>
>>>>>>> 30e07fb143d81c68adec8e9630687b23e062c9fb
                    <br/>
                    <label className="white beth" htmlFor="password">Password:</label>
                    <input  onChange={this.handleInputChange} id="giverPassword" name="password" className="white" type="text"></input>
                    <br/><br/>
                    <Button className="btn" style={position} click={this.click} location="/giver/fills"/>
                </form>
            </div>
        );
    }
}

export default Giverhome;