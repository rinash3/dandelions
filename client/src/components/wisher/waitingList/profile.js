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

                    <input
                        type="text"
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
                    <input
                        type="lastName"
                        name="lastName"
                        value={props.lastName}
                    />
                    <br></br>
                    <br></br>
                    <input
                        type="address"
                        name="address"
                        value={props.address}
                    />
                    <input
                        type="apt"
                        name="apt"
                        value={props.apt}
                    />
                    <br></br>
                    <br></br>
                    <input
                        type="city"
                        name="city"
                        value={props.city}
                    />
                    <input
                        type="text"
                        name="zipCode"
                        value={props.zipCode}
                        
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