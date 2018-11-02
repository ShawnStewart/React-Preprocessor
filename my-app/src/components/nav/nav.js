import React, { Component } from "react";

export default class nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "",
      showMobileMenu: false
    };
  }

  handleMenuClick = name => {
    this.setState({ active: name });
  };

  render() {
    console.log(this.state);
    return (
      <nav className="nav">
        <div className="menu-bar container">
          <h1 className="menu-bar-logo">Arcelona Design</h1>
          <span
            className="hamburger"
            onClick={() =>
              this.setState({ showMobileMenu: !this.state.showMobileMenu })
            }
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </span>
          <ul className="desktop-menu">
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
        </div>
        {this.state.showMobileMenu ? (
          <div className="mobile-menu">
            <div
              className="mobile-menu-item"
              onClick={() => {
                this.handleMenuClick("Home");
              }}
            >
              Home
            </div>
            <div
              className="mobile-menu-item"
              onClick={() => {
                this.handleMenuClick("About");
              }}
            >
              About
            </div>
            <div
              className="mobile-menu-item"
              onClick={() => {
                this.handleMenuClick("Contact");
              }}
            >
              Contact
            </div>
          </div>
        ) : null}
      </nav>
    );
  }
}
