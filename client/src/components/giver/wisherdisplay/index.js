import React, { Component } from "react";
import "./style.css";
import "../../share/UIbasics.css";
import Circle from "./circles"


class Wisherdisplay extends Component {
    state={
        wishes:[{"hi":"hihihi"},{"hi":"hihihi"},{"hi":"hihihi"},{"hi":"hihihi"},{"hi":"hihihi"},{"hi":"hihihi"},{"hi":"hihihi"},{"hi":"hihihi"},{"hi":"hihihi"},{"hi":"hihihi"}]
    }
    render() {
        return (
        <div>
            {this.state.wishes.map((element,i)=> {
              return <Circle key={i}/>
            })
            }
        </div>
        )
    }
}
export default Wisherdisplay;