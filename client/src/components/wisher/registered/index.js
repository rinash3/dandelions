import React, { Component } from "react";
import "../../share/UIbasics.css";
import "./style.css";
import Button from "../../share/button";
import Category from "../../share/category";
import API from "../../../utils/API";
import Background from "./background";

class Wisherfill extends Component {
    state={
        category:"",
        name:"",
        memo:"",
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    click= event=>{
        event.preventDefault();
        const wish={
            category:this.state.category,
            name:this.state.name,
            memo:this.state.memo,
            wisherId:this.props.account.email
        }
        API.createWish(wish).then(console.log("created wish!"))
    }

    render() {
        return (
            <div >
                <Background />
                <div className="formbg container">
                    <h1 className="black">What do you wish to have?</h1>
                    <br />
                    <p>Make your wish, so givers can see. The more appealing your story is, the greater chance your wish will be fullfilled. But be careful, you can only make one wish at once.</p><br />
                    <Category />
                    <br/>
                    <label className="margin-left-5vw black helvatica"
                       >Object name:</label>
                    <input className="black" placeholder="Ex: Prom dress" name="name" onChange={this.handleInputChange}></input>
                    <br/>
                    <br/>
                    <h3 className="margin-left-5vw black helvatica">Tell us a little bit about why you want it?*</h3>
                    <br/>
                    <textarea className="text margin-left-5vw black helvatica" name="memo" onChange={this.handleInputChange} placeholder="Ex: My prom is in 3 weeks and I need a nice dress">
                         </textarea>
                    <div className="margin-left-10vw">

                        <Button location="/wisher/thankyou" />

                    </div>
                </div>
            </div>
        );
    }
}
export default Wisherfill;