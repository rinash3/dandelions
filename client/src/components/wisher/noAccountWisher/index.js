import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
//import sample from './background.mp4';
// import Background from "./background";
// import Button from "../../share/button"



class WisherForm extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        apt: "",
        city: "",
        zipCode: ""
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
        alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
        this.setState({ username: "", password: "" });
    };

    render() {
        return (
            <div>
                <h1>Tell us about you</h1>
                <form>
                    <p>Email: {this.state.email}</p>
                    <p>Password: {this.state.password}</p>
                    <p>First Name: {this.state.firstName}</p>
                    <p>Last Name: {this.state.lastName}</p>
                    <p>Address: {this.state.address}</p>
                    <p>Apt: {this.state.apt}</p>
                    <p>City: {this.state.city}</p>
                    <p>Zip Code: {this.state.zipCode}</p>
                    <input
                        type="text"
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
                    <input
                        type="city"
                        placeholder="City"
                        name="city"
                        value={this.state.city}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="zipcode"
                        placeholder="ZipCode"
                        name="zipcode"
                        value={this.state.zipCode}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleFormSubmit}>Join in</button>

                </form>
            </div>
        )
    }
}
export default WisherForm;