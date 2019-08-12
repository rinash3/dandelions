import React, { Component } from "react";
import "./style.css";
import "../share/UIbasics.css";
import Background from "./background";
import Descriptionleft from "./descriptionleft";
import Descriptionright from "./descriptionright"
import Homebtn from "./homebtn";

class Homepage extends Component {


    dtWisher = (e) => {
        e.preventDefault();
    }
    dtGiver = (e) => {
        e.preventDefault();
    }

    render() {
       
        const moreMargin={
            marginLeft:'12vw'
        }
        return (
            <div>
                <div className="logo">Dandelion</div>
                <Background />
                <Homebtn location="/wisher/" text="Make a wish"/>
                <Homebtn style={moreMargin} location="/giver/" text="Fullfill a wish"/>

                <div className="descrp-container">
                        <Descriptionleft  className="home-lefthf" />
                        <Descriptionright className="home-righthf"/>
                </div>
            </div>
        );
    }
}

export default Homepage;
