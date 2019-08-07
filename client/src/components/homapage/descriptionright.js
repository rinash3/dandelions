import React from 'react';
import "../share/UIbasics.css"
import "./style.css"
import Homebtn from "./homebtn";

function Descriptionright(props) {
    const moveup={
        position:'absolute',
        marginTop:'1em',
        marginLeft:'-3em',
        background:'transparent'
    }

    return (
        <div className="home-dc">

            <h1 className="size-42">Dear Givers</h1>
            <br /> <br />
            <p className="size-28 tx-bold">This is a place for you to give a meaning end for your objects. Do you have anything that you want to donate, but don’t feel giving to charity that you will not where your object eventually go and whom they end up to?
                        <br />
                Here, you can directly connect to the person you wish to give your object to. You can make sure your object has a meaningful end as you wished.
                        <br />
                Fullfill a wish!</p>
                <br/>
            <Homebtn text="Fullfill wish" style={moveup}/>
        </div>
    )
}


export default Descriptionright;