import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import bgvideo from "./paper.mp4"
import ProfilePopup from "./profile"

class WaitingList extends Component {
    state = {
        account:this.props.account
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
        console.log(this.props.account);
        return (
            <div>
                <a className="maroon size-28" href="..." onClick={this.openProfile}>Profile</a>
                <video className="paper" autoPlay loop muted>
                    <source src={bgvideo} type='video/mp4' />
                </video>
                <h1 className="paper-text animated pulse">Your wish is heard, we will contact you soon</h1>
                <ProfilePopup submit={this.submit} id="ProfilePopup" Close={this.closeProfile}
                    email={this.state.account.email} password={this.state.account.password} firstName={this.state.account.name}
                    address={this.state.account.address}>
                </ProfilePopup>
            </div>
        );
    }
}

export default WaitingList;
