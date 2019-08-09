import React, { Component } from "react";
import "./style.css";
import "../share/UIbasics.css";
import Background from "./background";
import Descriptionleft from "./descriptionleft";
import Descriptionright from "./descriptionright"


class Homepage extends Component {

    render() {
       
        return (
            <div>
                <div className="logo">Dandelion</div>
                <Background />

                <div className="descrp-container">
                        <Descriptionleft  className="home-lefthf" />
                    
                        <Descriptionright className="home-righthf"/>
                </div>
            </div>
        );
    }
}

export default Homepage;