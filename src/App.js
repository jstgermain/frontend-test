import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProductContainer, StoreContainer } from "./containers";
import logo from './docker.png';
import './App.scss';

import { Header } from "./components/Organisms";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="content" />
          <div>
            <Switch>
              <Route exact path="/product" component={ProductContainer} />
              <Route exact path="/" component={StoreContainer} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
