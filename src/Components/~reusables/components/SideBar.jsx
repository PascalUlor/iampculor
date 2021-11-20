import React from "react";
import ProfileImage from "./ProfileImage";
import SideNavItem from "./SideNavItem";
import { sidebarIcons, sidebarTexts } from "../assets/icons/icons";
import { StyledSidebar } from "../atoms/DashBoardLayoutStyles";
import SocialMedia from "./SocialMedia";
import { MyContext } from "../../../Provider";
// import pascal from "../assets/images/profilepix.jpg";

class SidebarContainer extends React.Component {
  profilepix = 'https://res.cloudinary.com/donpcdocs/image/upload/v1637446189/personal/profilepix.jpg'
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <StyledSidebar className={context.sidebarOpen ? "active" : ""}>
            <ProfileImage name={"Pascal Ulor"} image={this.profilepix} path="/" />
            <div
              className="nav-items"
              role="presentation"
              onClick={context.toggleSidebar}
            >
              <SideNavItem
                text={sidebarTexts.about}
                icon={sidebarIcons.about}
                path="/about"
              />

              <SideNavItem
                text={sidebarTexts.portfolio}
                icon={sidebarIcons.portfolio}
                path="/projects"
              />

              {/* <SideNavItem
                text={sidebarTexts.contact}
                icon={sidebarIcons.contact}
                path="/contact"
              /> */}

              <SocialMedia
                text={"Get in touch"}
                icon={sidebarIcons.contact}
              ></SocialMedia>
            </div>
            <div className="empty-div" />
          </StyledSidebar>
        )}
      </MyContext.Consumer>
    );
  }
}

export default SidebarContainer;
