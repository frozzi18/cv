import React, { Component } from "react";
import { ReactComponent as IconMenu } from "../assets/menu.svg";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  changeStyle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav>
        <a className="logo" href="/">
          Rozzi
        </a>
        <div className="nav-links-horizontal">
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#contacts">
            Contacts
          </a>
        </div>
        <div className={this.state.isOpen ? "nav-links-vertical" : "hidden"}>
          <div className="nav-links">
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#contacts">
              Contacts
            </a>
          </div>
        </div>
        <IconMenu className="icon-menu" onClick={this.changeStyle} />
      </nav>
    );
  }
}
