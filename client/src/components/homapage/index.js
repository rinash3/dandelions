import React, { Component } from "react";
import "./style.css";
import "../share/UIbasics.css";
import Background from "./background";
import Homebtn from "./homebtn";
import Descriptionleft from "./descriptionleft";
import Descriptionright from "./descriptionright"


class Homepage extends Component {

    render() {
        return (

            <div>
                <div className="logo">Dandelion</div>
                <Background />
                <Homebtn text="Make a wish" location="/Wisher"/>
                <Homebtn text="Fullfill a wish" location="/Giver"/>

                <div className="home-lefthf">
                    <Descriptionleft />
                </div>

                <div className="home-righthf">
                    <Descriptionright />
                </div>
            </div>
        );
    }
}

export default Homepage;