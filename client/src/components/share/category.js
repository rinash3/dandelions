import React from "react";
import "./UIbasics.css"

function Category() {
    return (
        <select className="custom-select wisherselect" name="category">
            <option value="volvo">Select a category</option>
            <option value="Elctro">Electronic device</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessory" >Accessory</option>
            <option value="Household">Household</option>
            <option value="Art">Art</option>
            <option value="Sport">Sport</option>
            <option value="Toy">Toy</option>
            <option value="Decor">Decor</option>
            <option value="Book">Book</option>
        </select>
    )
}

export default Category;
