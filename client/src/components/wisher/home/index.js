import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Button from "../../share/button"
import WisherHomebg from "./wisherhomebg"
import WisherForm from "../register"
import WisherFill from "../registered"
import API from "../../../utils/API"

class Wisherhome extends Component {
    state={
        email:"",
        password:"",
        register:false,
        registered:false,
        account:{}
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    click = event =>{
        event.preventDefault();
        API.getWisher(this.state.email).then(res=>{
            if(res.data){
                this.setState({account:res.data, registered:true})
                console.log(res.data);
                if(res.data.password === this.state.password)
                    console.log("You were able to log in!");
                else
                    console.log("Incorrect password")
            }
            else
                this.setState({register:true})
        })
    }
    render() {
        if(this.state.register)
            return <WisherForm />
        if (this.state.registered)
            return <WisherFill />
        return (
            <div className="background container">
                <WisherHomebg />
                <form>
                    <h1 className="black">Make your wish</h1>
                    <a className="black" href="/giver">Fullfill a wish</a>
                    <label className="black beth" for="email">Email:</label>
                    <input onChange={this.handleInputChange} id="email" name="email" className="black" type="email"></input>
                    <br />
                    <label className="black beth" for="password">Password:</label>
                    <input onChange={this.handleInputChange} id="password" name="password" className="black" type="password"></input>
                    <br /><br />
                    <Button click={this.click} />
                </form>
            </div>
        );
    }
}

export default Wisherhome;