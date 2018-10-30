import React, { Component } from "react";
import "./stylesheets/main.css";
import Test from "./components/test1/test1";
import Test2 from "./components/test2/test2";
import Nav from "./components/nav/nav";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <Test />
        <Test2 />
      </div>
    );
  }
}

export default App;
