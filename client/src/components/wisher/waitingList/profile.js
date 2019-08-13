import React from 'react';
import "../../share/UIbasics.css"
import "./style.css"

function ProfilePopup(props) {
    const space = {
        marginTop: "1em",
        marginLeft: "2em",
        position: "absolute",
    }
    const none = {
        display: "none"
    }
    const input = {
        marginTop: '0',
        marginLeft: '0'
    }
    return (
        <div className="ProfilePopup animated zoomIn" style={none} id={props.id}>
            <div className="cross-for-profile" onClick={props.Close}>X</div>
            <h1 style={space}>Profile</h1>
            <form className="ty-edit">
                <label>email
                <br />
                    <input
                        style={input}
                        type="email"
                        name="email"
                        value={props.email}
                    />
<<<<<<< HEAD
                <label>Current Password:</label>
                    <input
                        type="password"
=======
                </label>

                <label>password
                <br />
                <input
                        style={input}
                        type="text"
>>>>>>> b50c686c37f2362c2efc28b8bb38494a7b589b3d
                        name="password"
                        value={props.password}
                    />
                </label>
                <br></br>
                <br></br>
                <label>first name
                <br />
                <input
                        style={input}
                        type="firstName"
                        name="firstName"
                        value={props.firstName}
                    />
<<<<<<< HEAD
                    <br></br>
                    <br></br>
                    <input
=======
                </label>

                <label>last name
                <br />
                <input
                        style={input}
                        type="lastName"
                        name="lastName"
                        value={props.lastName}
                    />
                </label>
                <br></br>
                <br></br>
                <label>address
                <br />
                <input
                        style={input}
>>>>>>> b50c686c37f2362c2efc28b8bb38494a7b589b3d
                        type="address"
                        name="address"
                        value={props.address}
                    />
<<<<<<< HEAD
                   
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
=======
                </label>
                <label>apt no.
                <br />
                <input
                        style={input}
                        type="apt"
                        name="apt"
                        value={props.apt}
                    />
                </label>
                <br></br>
                <br></br>
                <label>city
                <br />
                <input
                        style={input}
                        type="city"
                        name="city"
                        value={props.city}
                    />
                </label>
                <label>zip code
                <br />
                <input
                        style={input}
                        type="text"
                        name="zipCode"
                        value={props.zipCode}

>>>>>>> b50c686c37f2362c2efc28b8bb38494a7b589b3d
                    />
                </label>
                <br></br>
                <br></br>
                <br></br>

                <button className="black" onClick={props.submit}><h2> save</h2></button>

            </form>
        </div>
    );
}

export default ProfilePopup;