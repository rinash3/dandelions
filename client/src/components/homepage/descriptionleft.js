import React from 'react';
import "../share/UIbasics.css"
import "./style.css"

function Descriptionleft(props) {

    return (
        
        <div className={props.className}>
            <h1 className="size-42 white">Dear wishers</h1>
            <br /> <br />
            <p className="size-28 white">This is a place for you to make a wish. Do you have any moment, you wish to get something that you don’t really want to spend money on? For example, you want to dress up for your prom, but your mum will be really angry at you spending money on the dress that you will only wear once in your life.
                            <br />
                Here, you can get your beatiful dress for prom without spending tons of money on it and making your mum angry.
                            <br />
                What do you wait? Make a wish!</p>
                <br/>
        </div>
    )
}


export default Descriptionleft;