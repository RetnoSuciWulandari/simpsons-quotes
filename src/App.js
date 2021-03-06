//import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import Quote from "./Quote";
//import Quotes from "./Quotes";
//import Lamp from "./Lamp";

class App extends Component {
  state = {
    working: true
  };

  handleClick = () => {
    //console.log(this.state.working);
    this.setState({ working: !this.state.working });
  };

  renderCSS() {
    if (this.state.working) {
      return "working";
    } else {
      return "notworking";
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button
            className={this.renderCSS()}
            onClick={this.handleClick}
          ></button>
        </header>
        {/*
        <Lamp on />
        <Lamp />
        <Quotes />
        <Quotes
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />*/}
      </div>
    );
  }
}

export default App;
