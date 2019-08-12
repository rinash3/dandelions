import React from "react";
import "./UIbasics.css"

function Catagory() {
    return (
        <select className="custom-select wisherselect" name="catagory">
            <option value="volvo">Select object catagory</option>
            <option value="Elctro">Electronic devices</option>
            <option value="Clothes">Clothes</option>
            <option value="Accessaries" >Accessaries</option>
            <option value="Shoes">Shoes</option>
            <option value="Household">Household</option>
            <option value="Art">Art</option>
            <option value="Sports">Sports</option>
            <option value="Toys">Toys</option>
            <option value="Decors">Decors</option>
            <option value="Book">Book</option>
        </select>
    )
}

export default Catagory;
