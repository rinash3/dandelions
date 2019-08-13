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
        <div className="ProfilePopup animated zoomIn" style={none} id={props.id}>
            <div className="cross-for-profile"  onClick={props.Close}>X</div>
            <h1 style={space}>Profile</h1>
            <form className="ty-edit">
                    <input
                        type="email"
                        name="email"
                        value={props.email}
                    />
                <label>Current Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={props.password}
                    />
                    <br></br>
                    <br></br>
                    <input
                        type="firstName"
                        name="firstName"
                        value={props.firstName}
                    />
                    <br></br>
                    <br></br>
                    <input
                        type="address"
                        name="address"
                        value={props.address}
                    />
                   
                    <br></br>
                    <label>New Password:</label>
                    <input
                        type="password"
                        name="npass"
                    />
                    <label>Confirm new Password:</label>
                    <input
                        type="password"
                        name="cpass"                        
                    />
                    <br></br>
                    <br></br>
                    <br></br>

                    <button className="black" onClick={props.submit}><h2> save</h2></button>

                </form>
        </div>
    );
  }

export default ProfilePopup;