import React, { Component } from "react";

export default class nav extends Component {
  render() {
    return (
      <nav className="nav container">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
