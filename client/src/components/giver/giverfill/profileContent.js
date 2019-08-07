import React from 'react';
import "../../share/UIbasics.css"
import "./style.css"
import ContinueBtn from "./continueBtn.js"

function ProfileContent(props) {
    return (

        <tbody>
            <tr>
                <td>{props.object}</td>
                <td>{props.person}</td>
                <td>{props.date}</td>
                <td>{props.status?"sent":<ContinueBtn/>}</td>
            </tr>
        </tbody>
    );
}

export default ProfileContent;