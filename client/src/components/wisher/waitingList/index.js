import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import bgvideo from "./paper.mp4"
import ProfilePopup from "./profile"

class WaitingList extends Component {
    state = {
        email: "test@test.com",
        password: "123",
        firstName: "test",
        lastName: "test",
        address: "test",
        apt: "44",
        city: "test",
        zipCode: "2345"
    };

    submit = (e) => {
        console.log("hi");
    }
    closeProfile = (e) => {
        e.preventDefault();
        document.getElementById("ProfilePopup").style.display = "none"
    }

    openProfile = (e) => {
        e.preventDefault();
        document.getElementById("ProfilePopup").style.display = "block"
    }

    render() {
        return (
            <div>
                <a className="maroon size-28" href="..." onClick={this.openProfile}>Profile</a>
                <video className="paper" autoPlay loop muted>
                    <source src={bgvideo} type='video/mp4' />
                </video>
                <h1 className="paper-text animated pulse">Your wish is heard, we will contact you soon</h1>

                <ProfilePopup submit={this.submit} id="ProfilePopup" Close={this.closeProfile}
                    email={this.state.email} password={this.state.password} firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    address={this.state.address}
                    apt={this.state.apt}
                    city={this.state.city}
                    zipCode={this.state.zipCode}>
                </ProfilePopup>
                
            </div>
        );
    }
}

export default WaitingList;
