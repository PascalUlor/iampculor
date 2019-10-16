import React, { Component } from "react";
import { Navbar, NavItems } from "../atoms/MobileNavStyles";
import { MyContext } from "../../../Provider";
import MediaIcons from "./MediaIcons";

class MobileNav extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Navbar>
            <NavItems>
              <MediaIcons/>
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
