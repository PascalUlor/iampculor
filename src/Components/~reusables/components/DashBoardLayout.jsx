import React from "react";
import {
  Container,
  MainContainer,
  BackDrop
} from "../atoms/DashBoardLayoutStyles";
import SideBar from "./SideBar";
import { MyContext } from "../../../Provider";

const DashboardLayout = (
  { children } // eslint-disable-line
) => (
  <MyContext.Consumer>
    {context => (
      <MainContainer>
        <SideBar />

        <BackDrop
          className={context.sidebarOpen ? "active" : ""}
          onClick={context.toggleSidebar}
        >
          <Container className="container">{children}</Container>
        </BackDrop>
      </MainContainer>
    )}
  </MyContext.Consumer>
);

export default DashboardLayout;
