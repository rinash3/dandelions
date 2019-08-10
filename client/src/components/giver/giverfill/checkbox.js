import React from 'react';
import "../../share/UIbasics.css"

function Checkbox() {
    return (
        <div className="margin-left-5vw pretty p-default p-fill">
        <input type="checkbox" />
        <div className="state p-danger">
            <label className="white size-11">Once you choose to donate, object won't be retrieved in 3 monthes</label>
        </div>
    </div>
    );
  }

export default Checkbox;