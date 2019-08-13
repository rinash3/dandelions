import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Circle from "./circles";
import InfoBox from "./infoBox";
import BigCircle from "./bigCircle";
import Fullfill from "./fullfill"

class Wisherdisplay extends Component {
    state={
        //wisherName objectName memo
        wishes:this.props.wishes

    }

    displayInfo=(e)=>{
        e.preventDefault();
        document.getElementById("infoBox").style.display="block";
        
    }
    mouseMove=(e)=>{
        e.preventDefault();
        document.getElementById("infoBox").style.left=(e.clientX-120)+"px";
        document.getElementById("infoBox").style.top=(e.clientY-150)+"px";
        document.getElementById("infoBox").innerHTML="<p> Name: <span class='bold'>"+this.state.wishes[e.target.id].wisherName+"</span><br/>Object:<span class='bold'>"+this.state.wishes[e.target.id].name+"<br/>"+this.state.wishes[e.target.id].memo+"</span></p>";
    }
    closeInfo=(e)=>{
        e.preventDefault();
        document.getElementById("infoBox").style.display="none";
    }
    bigCircle=(e)=>{
        e.preventDefault();
        document.getElementById("theOne").style.display="block";
        document.getElementById("theOneBG").style.display="block";
        document.getElementById("fullfill").style.display="block";
        document.getElementById("theOne").style.backgroundColor=e.target.style.backgroundColor;
        document.getElementById("contentC").innerHTML="<div class='contentC'><h1 class='white'>You choose "+this.state.wishes[e.target.id].wisherName+"</h1><br/><h3>Object: "+this.state.wishes[e.target.id].name+"</br>"+this.state.wishes[e.target.id].memo+"</h3></br></br> <p>	Once you confirm, we will send you detailed shipping information. You can print out the form and ship it via UPS or Fedex for free.</br> After you ship the gift, you will receive a lottery numberat the shipping store. Enter it number and see what you will get. We offer a 7 day European trip to 3 people every month.</p></div>";
    }

    closeC=(e)=>{
        e.preventDefault();
        document.getElementById("theOne").style.display="none";
        document.getElementById("theOneBG").style.display="none";
        document.getElementById("fullfill").style.display="none";
    }

    render() {
        return (
        <div>
            <h1 className="maroon top1em">Choose one wish to fullfill</h1>
            <br/>
            {this.state.wishes.map((element,i)=> {
              return <Circle k={i} key={i} class="circle" MouseEnter={this.displayInfo} MouseMove={this.mouseMove} MouseLeave={this.closeInfo} Click={this.bigCircle}/>
            })
            }
            <InfoBox/>
            <BigCircle closeC={this.closeC} id="theOne"/>
            <Fullfill id="fullfill"/>
        </div>
        )
    }
}
export default Wisherdisplay;