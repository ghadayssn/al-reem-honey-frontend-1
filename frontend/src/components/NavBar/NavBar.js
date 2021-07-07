import React, { Component } from "react";
import { menuItems } from "./MenuItems";
import "./NavBar.css";
import icon from "./swarm.svg";

export default class NavBar extends Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked }); //set click to the oppsoite value whenever clicked
  };
  render() {
    return (
      <nav className="navBarItems">
        <h1 className="navBarLogo">
          عسل الريم
          <img src={icon}></img>
        </h1>

        <div className="menuIconHamburger" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
          {menuItems.map((item, index) => {
            //mapping menuItems = [] form MenuItems.js
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        {/* <Button> Sign Up</Button> */}
      </nav>
    );
  }
}
