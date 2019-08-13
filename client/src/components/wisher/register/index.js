import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Background from "./background";
import API from "../../../utils/API"
import WisherFill from "../registered"



class WisherForm extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        apt: "",
        city: "",
        zipCode: "",
        account: {},
        registered: false
    };

    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let wisher = {
            email: this.state.email,
            address: this.state.address + " " + this.state.city + " " + this.state.apt + " " + this.state.zipCode,
            password: this.state.password,
            name: this.state.firstName + " " + this.state.lastName
        };
        console.log(wisher)
        API.createWisher(wisher).then(res => {
            API.getWisher(this.state.email).then(resp => {
                this.setState({ account: resp.data, registered: true })
            })
        })
    };


    render() {
        if (this.state.registered)
            return <WisherFill account={this.state.account} />
        return (
            <div className="background z-index-upup container">
                <Background />
               
                <br></br>
                <br></br>
                <form className="wisher-register">
                <h1 className="wisher head">Tell us about you</h1>
                <br/>
                <p>Givers will need following information to send your gift to you. 
                    <br/>Don't let them be someone else's: )</p>
                    <br/>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <br></br>
                    <br></br>
                    <input
                        type="firstName"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="lastName"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                    <br></br>
                    <br></br>
                    <input
                        type="address"
                        placeholder="Address"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="apt"
                        placeholder="Apt"
                        name="apt"
                        value={this.state.apt}
                        onChange={this.handleInputChange}
                    />
                    <br></br>
                    <br></br>
                    <input
                        type="city"
                        placeholder="City"
                        name="city"
                        value={this.state.city}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="ZipCode"
                        name="zipCode"
                        value={this.state.zipCode}
                        onChange={this.handleInputChange}
                    />
                    <br></br>
                    <br></br>
                    <br></br>

                    <button className="black" onClick={this.handleFormSubmit}><h2>Join in -></h2></button>

                </form>
            </div>

        )
    }
}
export default WisherForm;