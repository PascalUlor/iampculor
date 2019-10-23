import React from "react";
import {
  Container,
  MainContainer,
} from "../atoms/DashBoardLayoutStyles";
import {  BackDrop} from '../atoms/MobileNavStyles';
import SideBar from "./SideBar";
import { MyContext } from "../../../Provider";

const DashboardLayout = (
  { children } // eslint-disable-line
) => (
  <MyContext.Consumer>
    {context => (
      <MainContainer>
      <BackDrop
          className={context.sidebarOpen ? "open" : ""}
          onClick={context.toggleSidebar}
        />
        <SideBar />  
        <Container className="container">{children}</Container>
      </MainContainer>
    )}
  </MyContext.Consumer>
);

export default DashboardLayout;
