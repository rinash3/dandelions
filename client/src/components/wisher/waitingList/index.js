import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import bgvideo from "./paper.mp4"
import ProfilePopup from "./profile"

class WaitingList extends Component {
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
                <h1 className="paper-text">Your wish is heard, we will contact you soon</h1>
                <ProfilePopup id="ProfilePopup" Close={this.closeProfile} content={this.state.list}>
                </ProfilePopup>
            </div>
        );
    }
}

export default WaitingList;
