import React from 'react';
import pic from "./home.jpg"
import "../../wisher/home/style.css"

export default class Wisherhomebg extends React.Component {
    render() {
        return (
            <img src={pic} alt="background" className="wisherhomebg" />
        )
    }
}



