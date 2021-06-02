import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Add from "../../pages/Add";
import Editbook from "../../pages/Editbook";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";

class RootContainer extends React.PureComponent {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/book/:id">
            <Editbook />
          </Route>
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default RootContainer;
