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
                details={`This application was developed to allow members of a team to 
                  give feedback anonymously to their teammates`}
                shortdeet={"Technologies"}
                techlist={[
                  { name: "GraphQL", link: "any" },
                  { name: "React", link: "any" },
                  { name: "express", link: "any" },
                  { name: "sequelize", link: "any" },
                  { name: "postgresql", link: "any" },
                  { name: "d3 js", link: "any" },
                  { name: "Jwt", link: "any" },
                  { name: "Apollo server", link: "any" }
                ]}
              />
              <Divider />
              <CardItem
                date={"July 2019"}
                image={Droom}
                title={"Droom"}
                details={`Droom was designed to match candidates
                and companies based on simple swipe gestures like Tinder`}
                shortdeet={"Technologies"}
                techlist={[
                  { name: "Firebase", link: "any" },
                  { name: "React", link: "any" }
                ]}
              />
              <Divider />
              <CardItem
                date={"May 2019"}
                image={Insatclone}
                title={"Instagram Clone"}
                details={"A pet project I built for fun to try out some new features of react"}
                shortdeet={"Technologies"}
                techlist={[
                  { name: "React", link: "any" },
                  { name: "express", link: "any" }
                ]}
              />
              <Divider />
              <CardItem
                date={"Feb 2019"}
                image={Politico}
                title={"Politico App"}
                details={`POLITICO is a full-stack vanilla JavaScript application that enables citizens to give their mandate 
                to politicians running for different government offices`}
                shortdeet={"Technologiesn"}
                techlist={[
                  { name: "express", link: "any" },
                  { name: "multer js", link: "any" },
                  { name: "postgresql", link: "any" },
                  { name: "node mailer", link: "any" },
                  { name: "Jwt", link: "any" }
                ]}
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
