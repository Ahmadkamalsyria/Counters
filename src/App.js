import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./Components/movies";
import NotFound from "./Components/notFound";
import Customers from "./Components/customers";
import Rentals from "./Components/rentals";
import NavBar from "./Components/NavBar";
import MovieForm from "./Components/movieForm";
import LogInFrom from "./Components/logInForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/Movies/:id" component={MovieForm} />
            <Route path="/logIn" component={LogInFrom} />
            <Route path="/Movies" component={Movies} />
            <Route path="/Customers" component={Customers} />
            <Route path="/NotFound" component={NotFound} />
            <Route path="/Rentals" component={Rentals} />
            <Redirect from="/" exact to="/Movies" />
            <Redirect to="/NotFound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
