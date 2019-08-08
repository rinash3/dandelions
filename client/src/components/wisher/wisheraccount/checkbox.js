import React from 'react';
import "../../share/UIbasics.css"

function Checkbox() {
    return (
        <div className="margin-left-5vw pretty p-default p-fill">
            <input type="checkbox" />
            <div className="state p-danger">
                <label className="white">What do you want to have</label>
                <textarea></textarea>
            </div>
        </div>
    );
}

export default Checkbox;