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
      <section
        className="md:fixed md:top-0 md:left-0 md:right-0 md:p-8 md:justify-between md:border 
      md:border-solid md:border-gray-200 md:flex xl:px-8 xl:py-20"
      >
        <a className="font-bold uppercase" href="/">
          Rozzi
        </a>
        <div className="md:hidden xl:grid xl:grid-flow-col xl:col-gap-16 xl:items-center">
          <a
            className="md:hover:text-black xl:hover:text-blue-700"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="md:hover:text-black xl:hover:text-blue-700"
            href="#contacts"
          >
            Contacts
          </a>
        </div>
        <div
          className={
            this.state.isOpen
              ? "md:grid md:grid-flow-row md:row-gap-16 md:items-center xl:hidden"
              : "hidden"
          }
        >
          <div className="nav-links">
            <a
              className="md:hover:text-black xl:hover:text-blue-700"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="md:hover:text-black xl:hover:text-blue-700"
              href="#contacts"
            >
              Contacts
            </a>
          </div>
        </div>
        <IconMenu className="md:block xl:hidden" onClick={this.changeStyle} />
      </section>
    );
  }
}
