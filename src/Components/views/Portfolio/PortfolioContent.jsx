import React from "react";
import styled from "styled-components";
import { Icon, InlineIcon } from '@iconify/react';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import reactIcon from '@iconify/icons-logos/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import expressIcon from '@iconify/icons-logos/express';
import graphqlIcon from '@iconify/icons-logos/graphql';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import d3Icon from '@iconify/icons-logos/d3';
import gitIcon from '@iconify/icons-logos/git-icon';
import herokuIcon from '@iconify/icons-logos/heroku-icon';
import apollostackIcon from '@iconify/icons-logos/apollostack';
import firebaseIcon from '@iconify/icons-logos/firebase';
import sequelizeIcon from '@iconify/icons-logos/sequelize';
import netlifyIcon from '@iconify/icons-logos/netlify';
import CardItem from "./CardItem";
import AnonymousTeamFeedBack from "../../~reusables/assets/images/Sample Survey.gif";
import Droom from "../../~reusables/assets/images/droomapp.jpeg";
import Politico from "../../~reusables/assets/images/politico.gif";
import Insatclone from "../../~reusables/assets/images/instaclone.gif";
import Divider from "../../~reusables/atoms/Divider";
import ContentLayout from "../../~reusables/components/ContentLayout";

const PortfolioContent = () => {
  return (
    <ContentLayout>
        <ProjectList>
          <ListItem>
            <CardItem
              date={"Sept 2019"}
              image={AnonymousTeamFeedBack}
              title={"Anonymous Team Feedback"}
              details={`This application was developed to allow members of a team to 
                  give feedback anonymously to their teammates`}
              shortdeet={"Technologies"}
              techlist={[
                { name: <Icon icon={javascriptIcon}width="30" height="30" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
          { name: <Icon icon={nodejsIcon} width="30" height="30"/>, link: "https://nodejs.org/en/" },
          { name: <Icon icon={reactIcon} width="30" height="30"/>, link: "https://reactjs.org" },
          {
            name: <Icon icon={graphqlIcon} width="30" height="30"/>,
            link: "https://graphql.org"
          },
          { name: <Icon icon={expressIcon} width="30" height="30" />, link: "https://expressjs.com" },
          { name: <Icon icon={apollostackIcon} width="30" height="30"/>, link: "https://www.apollographql.com/docs/apollo-server/" },
          { name: <Icon icon={postgresqlIcon} width="30" height="30"/>, link: "https://www.postgresql.org" },
          { name: <Icon icon={sequelizeIcon} width="30" height="30"/>, link: "https://sequelize.org" },
          { name: <Icon icon={d3Icon} width="30" height="30"/>, link: "https://d3js.org" },

          { name: <Icon icon={gitIcon} width="30" height="30"/>, link: "https://git-scm.com" },
          
          { name: <Icon icon={herokuIcon} width="30" height="30"/>, link: "https://dashboard.heroku.com" },
          { name: "Jwt", link: "https://jwt.io" }
              ]}
              path={"https://anonymous-team-feeedback.herokuapp.com/"}
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
                { name: <Icon icon={firebaseIcon} width="30" height="30"/>, link: "https://firebase.google.com/" },
                { name: <Icon icon={reactIcon} width="30" height="30"/>, link: "https://reactjs.org" },
                {name: <Icon icon={netlifyIcon} width="30" height="30"/>, link:'https://www.netlify.com/'},
              ]}
              path={"https://getdroom.netlify.com/"}
            />
            <Divider />
            <CardItem
              date={"May 2019"}
              image={Insatclone}
              title={"Instagram Clone"}
              details={
                "A pet project I built for fun to try out some new features of react"
              }
              shortdeet={"Technologies"}
              techlist={[
                { name: <Icon icon={reactIcon} width="30" height="30"/>, link: "https://reactjs.org" },
                {name: <Icon icon={netlifyIcon} width="30" height="30"/>, link:'https://www.netlify.com/'},
                { name: <Icon icon={expressIcon} width="30" height="30" />, link: "https://expressjs.com" },
              ]}
              path={"https://my-insta-clone-react.netlify.com/"}
            />
            <Divider />
            <CardItem
              date={"Feb 2019"}
              image={Politico}
              title={"Politico App"}
              details={`POLITICO is a full-stack vanilla JavaScript application that enables citizens to give their mandate 
                to politicians running for different government offices`}
              shortdeet={"Technologies"}
              techlist={[
                { name: <Icon icon={expressIcon} width="30" height="30" />, link: "https://expressjs.com" },
                { name: <Icon icon={postgresqlIcon} width="30" height="30"/>, link: "https://www.postgresql.org" },
                { name: "node mailer", link: "https://nodemailer.com/about/" },
                { name: "Jwt", link: "https://jwt.io" },
              ]}
              path={"https://the-politico.herokuapp.com/"}
            />
            <Divider />
          </ListItem>
        </ProjectList>
    </ContentLayout>
  );
};

// const Container = styled.div`
//   overflow-y: scroll;
//   -ms-overflow-style: none; // IE 10+
//   scrollbar-width: none;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   position: relative;
//   -webkit-font-smoothing: antialiased;
//   background: #f4f4f4;
//   max-height: 100vh;
// `;

// const PortfolioLayout = styled.div`
//   max-height: 100vh;
//   max-width: 1400px;
//   padding: 50px;
// `;

// const Title = styled.h1`
//   line-height: 1;
//   margin-bottom: 15px;
//   color: #555;
//   font-size: 36px;
//   font-weight: 400;
//   text-transform: uppercase;
//   -webkit-font-smoothing: antialiased;
// `;

// const TimeLine = styled.div`
//   font-size: 16px;
//   margin-left: -50px;
// `;

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

// const BackButton = styled(LinkButton)`
//   font-size: 1.6rem;
//   margin: 1rem 0 0 1rem;
//   padding: 0 1rem;
// `;

export default PortfolioContent;
