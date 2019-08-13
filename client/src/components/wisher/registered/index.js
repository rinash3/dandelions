import React, { Component } from "react";
import "../../share/UIbasics.css";
import "./style.css";
import Button from "../../share/button";
import Category from "../../share/category";
import API from "../../../utils/API";


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
            wisherId:this.props.account.email,
            wisherName:this.props.account.name,
            status:false
        }
        API.createWish(wish).then(console.log("created wish!"))
    }

    cat = event=>{
        this.setState({category:event.target.value});
    }

    render() {
        return (
            <div >
                {/* <Background /> */}
                <div className="formbg container">
                    <h1 className="black">What do you wish to have?</h1>
                    <br /><br /><br />
                    <Category change={this.cat} />
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
                        <Button click={this.click} />

                    </div>
                </div>
            </div>
        );
    }
}
export default Wisherfill;