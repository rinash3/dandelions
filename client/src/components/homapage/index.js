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
       
        const someMargin={


            marginLeft:'25%',
            top:'32em'
        }
        const moreMargin={
            marginLeft:'12vw',

            marginLeft:'15em',
            top:'32em'
        }
       
            marginLeft:'25%',
            top:'32em'
        }
        const moreMargin={
            marginLeft:'12vw',
           top:'32em'
        }
        return (
            <div>
                <div className="logo">Dandelion</div>
                <Background />


                <Homebtn style={someMargin} location="/wisher/" text="Make a wish"/>
                <Homebtn style={moreMargin} location="/giver/" text="Fullfill a wish"/>

                <Homebtn style={someMargin} location="/wisher/" text="Make a wish" Click={this.dtWisher} />
                <Homebtn style={moreMargin} location="/giver/" text="Fullfill a wish" Click={this.dtGiver} />

            

                <div className="descrp-container">
                        <Descriptionleft  className="home-lefthf" />
                    
                        <Descriptionright className="home-righthf"/>
                </div>
            </div>
        );
    }
}



export default Homepage;




