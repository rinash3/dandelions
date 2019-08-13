import React from 'react';
import "../../share/UIbasics.css"
import "./style.css"

function ProfilePopup(props) {
    const space={
        marginTop:"1em",
        marginLeft:"2em",
        position:"absolute",
    }
    const none={
        display:"none"
    }

    return (
        <div className="ProfilePopup" style={none} id={props.id}>
            <div className="cross-for-profile"  onClick={props.Close}>X</div>
            <h1 style={space}>Donation list</h1>
            {props.children}
        </div>
    );
  }

export default ProfilePopup;