import React, { Component } from "react";
import "../../share/UIbasics.css";
import "./style.css";
import Background from "./background";
import Button from "../../share/button"
import Category from "../../share/category"
import Checkbox from "./checkbox.js"
import ProfilePopup from "./profile.js"
import ProfileContent from "./profileContent.js"
import API from "../../../utils/API"
import Wisherdisplay from "../wisherdisplay";

class Giverfill extends Component {

    state = {
        list: this.props.account.pastGifts,
        category:"",
        name: "",
        check:false,
        account: this.props.account,
        wishes:[]
    }
    
    closeProfile = (e) => {
        e.preventDefault();
        document.getElementById("ProfilePopup").style.display = "none"
    }
    openProfile = (e) => {
        e.preventDefault();
        document.getElementById("ProfilePopup").style.display = "block"
    }

    handleInputChange = event =>{
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    click = event =>{
        event.preventDefault();
        API.getWishes(this.state.category).then(res=>{
            this.setState({wishes:res.data});
            console.log("Found wishes!")
        });
    }
    cat= event=>{
        this.setState({category:event.target.value})
    }
    render() {

        const btn = {
            color: 'white',
            marginTop: '2em',
            position: 'relative',
            textAlign: 'left',
            zIndex:"10",
            marginLeft:'6em'

        }
        if(this.state.wishes.length >0)
            return <Wisherdisplay account={this.state.account} wishes={this.state.wishes}/>
        else
        return(
            
            <div >
                <Background />
                <a className="maroon size-28" href="..." onClick={this.openProfile}>Profile</a>
                <ProfilePopup id="ProfilePopup" Close={this.closeProfile} content={this.state.list}>
                    <table className="table maroon">
                        <thead>
                            <tr>
                                <th>Object</th>
                                <th>Person</th>
                                <th>date</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        {this.state.list.map((item, i) => {
                            return <ProfileContent key={i} object={item.object} person={item.person} date={item.date} status={item.status} />
                        })
                        }
                    </table>
                </ProfilePopup>



                <div className="giver-formbg animated fadeInUp">
                    <h1 className="white">What do you want to give?</h1>
                    <br /><br /><br />
                    <Category change={this.cat}/>
                    <br /><br />
                    <label className="margin-left-5vw white helvatica"
                        htmlFor="objName">Object name:</label>
                    <input className="white" name="name"></input>
                    <br />
                    <Checkbox />
                    <br />
                    <Button className="btn" style={btn} click={this.click}/>
                </div>
            </div>);
    }
}
export default Giverfill;