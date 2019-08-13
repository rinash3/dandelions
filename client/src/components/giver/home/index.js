import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Button from "../../share/button"
import Giverhomepagebg from "./giverhomepagebg"
import Giverfill from "../giverfill"
import API from "../../../utils/API"

class Giverhome extends Component {
    state = {
        email: "",
        password: "",
        registered: false,
        account: {}
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    click = event => {
        event.preventDefault();
        API.getGiver(this.state.email).then(res => {
            if (res.data) {
                if (res.data.password === this.state.password){
                    this.setState({ account: res.data, registered: true });
                    console.log("You were able to log in!");
                }
                else
                    alert("Incorrect password!")
            }
            else {
                let person = {
                    email: this.state.email,
                    password: this.state.password
                }
                if(this.state.password){
                    API.createGiver(person)
                    .then(console.log("Created new person"))
                    .then(API.getGiver(this.state.email).then(res=>{
                        this.setState({account: res.data, registered:true});
                    }));
                }
               else
                alert("Please enter a password!");
            }
        })
    }

    render() {

        const someMargin={
            marginBottom:'2em'
        }
        //if account found and password is correct redirect to main page for specified giver
        if (this.state.registered)
            return <Giverfill account={this.state.account} />
        //else just keep it the page we are on now
        else
        return(
            <div>
                <Giverhomepagebg />
                
                <form className="hp-form">


                    <h1 className="white hp-h1" style={someMargin}>Fullfill a wish</h1>
                    <a className="white size-28" href="/wisher">Make a wish</a>    
                    <label className="white beth" htmlFor="email">Email:</label>
                    <input onChange={this.handleInputChange} id="giverEmail" name="email" className="white" type="email"></input>
                    <br/>

                    <label className="white beth" htmlFor="password">Password:</label>
                    <input onChange={this.handleInputChange} id="giverPassword" name="password" className="white" type="password"></input>
                    <br /><br />

                    <Button className="btn" style={this.props.position} click={this.click} location="/giver/fills" />

                </form>

            </div>

        );
    }
    }

export default Giverhome;
