import React from 'react';
import ProfileImage from './ProfileImage';
import SideNavItem from './SideNavItem';
import { sidebarIcons, sidebarTexts } from '../assets/icons/icons';
import { StyledSidebar } from '../atoms/DashBoardLayoutStyles';
import { MyContext } from '../../../Provider';
import pascal from '../assets/images/pascal.jpg';

class SidebarContainer extends React.Component {

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <StyledSidebar className={context.sidebarOpen ? 'active' : ''}>
            <ProfileImage
              name={'Pascal Ulor'}
              image={pascal}
            />
            <div
              className="nav-items"
              role="presentation"
              onClick={context.toggleSidebar}
            >
              <SideNavItem
                text={sidebarTexts.portfolio}
                icon={sidebarIcons.portfolio}
                path="/projects"
              />

              <SideNavItem	
                text={sidebarTexts.experience}	
                icon={sidebarIcons.experience}	
                path="/experience"	
              />

              <div id="logout" role="presentation" onClick={context.logout}>
                <SideNavItem
                  text={sidebarTexts.contact}
                  icon={sidebarIcons.contact}
                  path="/contact"
                />
              </div>
            </div>
            <div className="empty-div" />
          </StyledSidebar>
        )}
      </MyContext.Consumer>
    );
  }
}

export default SidebarContainer;
