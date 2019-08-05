import React from 'react';
import "../../share/UIbasics.css"

function Checkbox() {
    return (
        <div className="margin-left-5vw pretty p-default p-fill">
        <input type="checkbox" />
        <div className="state p-danger">
            <label className="white">Once you choose to donate the object, you can’t retrieve it in 3 monthes</label>
        </div>
    </div>
    );
  }

export default Checkbox;