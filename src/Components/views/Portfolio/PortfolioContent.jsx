import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import ATF from "../../~reusables/assets/images/Sample Survey.gif";
import Droom from "../../~reusables/assets/images/droomapp.jpeg";
import Politico from "../../~reusables/assets/images/politico.gif";
import Insatclone from "../../~reusables/assets/images/instaclone.gif";
import Divider from "../../~reusables/atoms/Divider";
// import {
//   white,
//   heading5,
//   tabletMaxWidth,
//   mobileMAxWidth,
//   deskTopMaxWidth
// } from "../../~reusables/variables";

const PortfolioContent = () => {
  return (
    <Container>
      <PortfolioLayout>
        <Title>My Projects</Title>
        <p>Below are some of the projects I've worked on.</p>
        <TimeLine>
          <ProjectList>
            <ListItem>
              <CardItem
                date={"Sept 2019"}
                image={ATF}
                title={"Anonymous Team Feedback"}
                details={"My App"}
                shortdeet={"Get feedbacks fast"}
                techlist={["GraphQL", "React"]}
              />
              <Divider />
              <CardItem
                date={"July 2019"}
                image={Droom}
                title={"Droom"}
                details={"My App"}
                shortdeet={"Tinder like job seeking application"}
                techlist={["Firebase", "React"]}
              />
              <Divider />
              <CardItem
                date={"May 2019"}
                image={Insatclone}
                title={"Instagram Clone"}
                details={"My App"}
                shortdeet={"Tinder like job seeking application"}
                techlist={["Firebase", "React"]}
              />
              <Divider />
              <CardItem
                date={"Feb 2019"}
                image={Politico}
                title={"Politico App"}
                details={"My App"}
                shortdeet={"Tinder like job seeking application"}
                techlist={["Firebase", "React"]}
              />
              <Divider />
            </ListItem>
          </ProjectList>
        </TimeLine>
      </PortfolioLayout>
    </Container>
  );
};

const Container = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none; // IE 10+
  scrollbar-width: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: relative;
  -webkit-font-smoothing: antialiased;
  background: #f4f4f4;
  max-height: 100vh;
`;

const PortfolioLayout = styled.div`
  max-height: 100vh;
  max-width: 1400px;
  padding: 50px;
`;

const Title = styled.h1`
  line-height: 1;
  margin-bottom: 15px;
  color: #555;
  font-size: 36px;
  font-weight: 400;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
`;

const TimeLine = styled.div`
  font-size: 16px;
  margin-left: -50px;
`;

const ProjectList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: block;
  margin: 0;
  padding-left: 2rem;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 568px) {
    &:first-child {
      padding-top: 0;
      line-height: 1.5;
      margin-top: 10px;
    }
  }
`;

export default PortfolioContent;
