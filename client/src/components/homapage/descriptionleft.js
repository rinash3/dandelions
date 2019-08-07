import React from 'react';
import "../share/UIbasics.css"
import "./style.css"
import Homebtn from "./homebtn";

function Descriptionleft(props) {
    const moveup={
        position:'absolute',
        marginTop:'1em',
        marginLeft:'-3em',
        background:'transparent',
        color:'white',
        border:'solid 2px white'
    }

    return (
        <div className="home-dc">
            <h1 className="size-42 white">Dear wishers</h1>
            <br /> <br />
            <p className="size-28 white">This is a place for you to make a wish. Do you have any moment, you wish to get something that you don’t really want to spend money on? For example, you want to dress up for your prom, but your mum will be really angry at you spending money on the dress that you will only wear once in your life.
                            <br />
                Here, you can get your beatiful dress for prom without spending tons of money on it and making your mum angry.
                            <br />
                What do you wait? Make a wish!</p>
                <br/>
            <Homebtn style={moveup} text="Make a wish" />
        </div>
    )
}


export default Descriptionleft;