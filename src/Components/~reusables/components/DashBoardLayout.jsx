import React from 'react';
import { Container, MainContainer } from '../atoms/DashBoardLayoutStyles';
import SideBar from './SideBar';


const DashboardLayout = (
	{ children } // eslint-disable-line
) => (
  <MainContainer>
    <SideBar />
    <Container className="container">{children}</Container>
  </MainContainer>
);

export default DashboardLayout;
