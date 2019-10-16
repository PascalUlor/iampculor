import React, { Component } from "react";
import { Navbar } from "../atoms/MobileNavStyles";
import { MyContext } from "../../../Provider";

class MobileNav extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Navbar>
            <i
              className="fas fa-bars"
              role="presentation"
              onClick={context.toggleSidebar}
            />
            Navigation
          </Navbar>
        )}
      </MyContext.Consumer>
    );
  }
}

export default MobileNav;
