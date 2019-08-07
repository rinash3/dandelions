import React, { Component } from "react";
import "./style.css";
import "../share/UIbasics.css";
import Background from "./background";
import Homebtn from "./homebtn";
import Descriptionleft from "./descriptionleft";
import Descriptionright from "./descriptionright"


class Homepage extends Component {

    dtWisher = (e) => {
        e.preventDefault();
    }
    dtGiver = (e) => {
        e.preventDefault();
    }


    render() {
        return (

            <div>
                <div className="logo">Dandelion</div>
                <Background />
                <Homebtn text="Make a wish" Click={this.dtWisher} />
                <Homebtn text="Fullfill a wish" Click={this.dtGiver} />

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