import React, { Component } from "react";

export default class nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: ""
    };
  }

  handleMenuClick = name => {
    this.setState({ active: name });
  };

  render() {
    return (
      <nav className="nav container">
        <ul>
          <li>
            <a
              href="localhost:3000"
              className={this.state.active === "Home" ? "active" : ""}
              onClick={() => {
                this.handleMenuClick("Home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="localhost:3000"
              className={this.state.active === "About" ? "active" : ""}
              onClick={() => {
                this.handleMenuClick("About");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="localhost:3000"
              className={this.state.active === "Contact" ? "active" : ""}
              onClick={() => {
                this.handleMenuClick("Contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
