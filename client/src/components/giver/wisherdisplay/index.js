import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Circle from "./circles";
import InfoBox from "./infoBox";
import BigCircle from "./bigCircle";
import Fullfill from "./fullfill"
import {Redirect} from "react-router-dom"
class Wisherdisplay extends Component {
    state={
        //wisherName objectName memo
        wishes:this.props.wishes,
        fulfilled:false,
        number:-1
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
        document.getElementById("contentC").innerHTML="<div class='contentC'><h1 class='white'>You choose "+this.state.wishes[e.target.id].wisherName+"</h1><br/><h3>Object: "+this.state.wishes[e.target.id].name+"</br>"+this.state.wishes[e.target.id].memo+
        "</h3></br></br> <p>	Once you confirm, we will send you detailed shipping information. You can print out the form and ship it via UPS or Fedex for free.</br> After you ship the gift, you will receive a lottery numberat the shipping store. Enter it number and see what you will get. We offer a 7 day European trip to 3 people every month.</p></div>";
        this.state.number=parseFloat(e.target.id);
    }

    closeC=(e)=>{
        e.preventDefault();
        document.getElementById("theOne").style.display="none";
        document.getElementById("theOneBG").style.display="none";
        document.getElementById("fullfill").style.display="none";
    }
    
    click= e=>{
        const giver=this.props.account;
        giver.pastGifts.push()
        this.setState({fulfilled:true})
    }


    render() {
        let used=[];
        if(this.state.fulfilled)
            return <Redirect to={{pathname:"/giver/connect", state:{account:this.props.account}}} />
        return (
        <div>
            <h1 className="maroon top1em">Choose one wish to fullfill</h1>
            <br/>
            {   
                this.state.wishes.map((element,i)=> {
                let y=Math.random()*(window.innerHeight-200)+100;
                let x=Math.random()*(window.innerWidth-200)-200;
                let y1=y+1;
                let x1=x+1;
                // console.log('fine');
                    if(used.length===0){
                        used.push({x,y,x1,y1});
                        console.log('fine');
                     }
                    else{
                        for(let j = 0; j < used.length; j++){
                            while((x>used[j].x&&x < used[j].x1) || (y>used[j].y && y < used[j].y1)){
                                x+=5;
                                y+=5;
                        }
                    }
                    used.push({x,y,x1,y1});
                    
                }

              return <Circle k={i} top={y} left={x} key={i} class="circle animated zoomIn" MouseEnter={this.displayInfo} MouseMove={this.mouseMove} MouseLeave={this.closeInfo} Click={this.bigCircle}/>
            })
            }
            <InfoBox/>
            <BigCircle closeC={this.closeC} id="theOne"/>
            <Fullfill id="fullfill" content={this.props.number} click={this.click}/>
        </div>
        )
    }
}
export default Wisherdisplay;