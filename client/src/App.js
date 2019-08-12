import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
import Giverhome from "./components/giver/home/index";
import Giverfill from "./components/giver/giverfill/index";
import Wisherdisplay from "./components/giver/wisherdisplay/index";
import PrintAddress from "./components/giver/printAddress/index";

import Homepage from "./components/homepage/index"
import Loading from "./components/share/loading"
import NoMatch from "./components/share/nomatch"


import Wisherhome from "./components/wisher/home/index";
import WisherRegister from "./components/wisher/register";
import WisherRegistered from "./components/wisher/registered";




class App extends Component {
  state={
    isLoading:true
  }

constructor() {
    super();
    this.state = { isLoading: true }
}

componentDidMount() {
    setTimeout(()=>{this.setState({isLoading: false})},1000)
}


 render(){
  
    if(this.state.isLoading===true){
      return <Loading/>
    }else{
      return (
        <Router>
      <div>
        <Switch>

          <Route exact path="/" component={Homepage} />

          {/* wisher's module */}
          <Route exact path="/wisher" component={Wisherhome} />
          <Route exact path="/wisher/register" component={WisherRegister} />
          <Route exact path="/wisher/registered" component={WisherRegistered} />
          {/* <Route exact path="/loading" component={Loading} /> */}

          {/* giver's modult */}
          <Route exact path="/giver" component={Giverhome} />
          <Route exact path="/giver/fills" component={Giverfill} />
          <Route exact path="/giver/wishes" component={Wisherdisplay} />
          <Route exact path="/giver/connect" component={PrintAddress} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
      )
    }
    
 }
}
export default App;