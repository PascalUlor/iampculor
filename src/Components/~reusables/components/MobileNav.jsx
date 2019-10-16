import React, { Component } from "react";
import { Navbar, Social, NavItems } from "../atoms/MobileNavStyles";
import { MyContext } from "../../../Provider";

class MobileNav extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Navbar>
            <NavItems>
              <Social>
                <a rel="me" href='https://www.linkedin.com/in/pascal-ulor/' title="linkedin">
                <i className="fab fa-linkedin"/>
                </a>
                <a rel="me" href='https://github.com/PascalUlor' title="github">
                <i className="fab fa-github-square"/>
                </a>
                <a rel="me" href='https://twitter.com/pc_codes' title="github">
                <i className="fab fa-twitter-square"/>
                </a>
              </Social>
              <i
                className="fas fa-bars"
                role="presentation"
                onClick={context.toggleSidebar}
              />
            </NavItems>
          </Navbar>
        )}
      </MyContext.Consumer>
    );
  }
}

export default MobileNav;
