import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import lumbee from "./pages/lumbee";
import Nav from "./components/Nav";

class App extends Component {
  
  render() {
    return (
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={lumbee} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
