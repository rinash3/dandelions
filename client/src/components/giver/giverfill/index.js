import React, { Component } from "react";
import "../../share/UIbasics.css";
import "./style.css";
import Background from "./background";
import Button from "../../share/button"
import Catagory from "../../share/catagory"
import Checkbox from "./checkbox.js"
import ProfilePopup from "./profile.js"
import ProfileContent from "./profileContent.js"

class Giverfill extends Component {

    state = {
        list: [{ "object": "kdmcs ncjk", "person": "ndklsmcm nfdo", "date": "ee/ee/ee", "status": true }, { "object": "kdmcs ncjk", "person": "ndklsmcm nfdo", "date": "ee/ee/ee", "status": true }, { "object": "kdmcs ncjk", "person": "ndklsmcm nfdo", "date": "ee/ee/ee", "status": false }]
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

        const btn = {
            color: 'white',
            marginTop: '2em',
            position: 'relative',
            textAlign: 'left',
            zIndex:"10",
            marginLeft:'6em'

        }
        return (
            <div >
                <Background />
                <a className="maroon size-28" href="..." onClick={this.openProfile}>Profile</a>
                <ProfilePopup id="ProfilePopup" Close={this.closeProfile} content={this.state.list}>
                    <table className="table maroon">
                        <thead>
                            <tr>
                                <th>Object</th>
                                <th>Person</th>
                                <th>date</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        {this.state.list.map((item, i) => {
                            return <ProfileContent key={i} object={item.object} person={item.person} date={item.date} status={item.status} />
                        })
                        }
                    </table>
                </ProfilePopup>



                <div className="giver-formbg">
                    <h1 className="white">What do you want to give?</h1>
                    <br /><br /><br />
                    <Catagory />
                    <br /><br />
                    <label className="margin-left-5vw white helvatica"
                        htmlFor="objName">Object name:</label>
                    <input className="white"></input>
                    <br />
                    <Checkbox />
                    <br />
                    <Button className="btn" style={btn} location="/giver/wishes" />
                </div>
            </div>
        );
    }
}
export default Giverfill;