import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
import Giverhome from "./components/giver/home/index"
import Giverfill from "./components/giver/giverfill/index"
import Wisherdisplay from "./components/giver/wisherdisplay/index"



function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* wisher's module */}

          {/* giver's modult */}
          <Route exact path="/giver" component={Giverhome} />
          <Route exact path="/giver/fills" component={Giverfill} />
          <Route exact path="/giver/wishes" component={Wisherdisplay} />
          {/* <Route exact path="/giver/confirm" component={giver/confirm} /> */}
          {/* <Route exact path="/giver/lottery" component={giver/lottery} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
