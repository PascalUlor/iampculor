import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import djangoIcon from "@iconify/icons-logos/django";
import pusherIcon from "@iconify/icons-logos/pusher";
import pythonIcon from "@iconify/icons-logos/python";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import reactIcon from "@iconify/icons-logos/react";
import javascriptIcon from "@iconify/icons-logos/javascript";
import reduxIcon from '@iconify/icons-logos/redux';
import reduxSaga from '@iconify/icons-logos/redux-saga';
import expressIcon from "@iconify/icons-logos/express";
import graphqlIcon from "@iconify/icons-logos/graphql";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import d3Icon from "@iconify/icons-logos/d3";
import gitIcon from "@iconify/icons-logos/git-icon";
import herokuIcon from "@iconify/icons-logos/heroku-icon";
import apollostackIcon from "@iconify/icons-logos/apollostack";
import firebaseIcon from "@iconify/icons-logos/firebase";
import sequelizeIcon from "@iconify/icons-logos/sequelize";
import netlifyIcon from "@iconify/icons-logos/netlify";
import knexIcon from '@iconify/icons-logos/knex';
import CardItem from "./CardItem";
import AnonymousTeamFeedBack from "../../~reusables/assets/images/Sample Survey.gif";
import Droom from "../../~reusables/assets/images/droomapp.jpeg";
import Politico from "../../~reusables/assets/images/politico.gif";
import Insatclone from "../../~reusables/assets/images/instaclone.gif";
import MudGame from "../../~reusables/assets/images/mud.png";
import Hackton from "../../~reusables/assets/images/hackton.png";
import Divider from "../../~reusables/atoms/Divider";
import ContentLayout from "../../~reusables/components/ContentLayout";

const PortfolioContent = () => {
  return (
    <ContentLayout>
      <ProjectList>
        <ListItem>
        <CardItem
            date={"Feb 2020"}
            image={Hackton}
            title={"Hackton"}
            details={`A comprehensive portal for hackathons where students can submit their work and judges can evaluate in one place.
            It is an app that helps you organize and evaluate Hackathons.`}
            shortdeet={"Technologies"}
            techlist={[
              {
                name: <Icon icon={javascriptIcon} width="30" height="30" />,
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              },
              {
                name: <Icon icon={nodejsIcon} width="30" height="30" />,
                link: "https://nodejs.org/en/"
              },
              {
                name: <Icon icon={reactIcon} width="30" height="30" />,
                link: "https://reactjs.org"
              },
              {
                name: <Icon icon={gitIcon} width="30" height="30" />,
                link: "https://git-scm.com"
              },
              {
                name: <Icon icon={herokuIcon} width="30" height="30" />,
                link: "https://dashboard.heroku.com"
              },
              {
                name: <Icon icon={postgresqlIcon} width="30" height="30" />,
                link: "https://www.postgresql.org"
              },
              {
                name: <Icon icon={expressIcon} width="30" height="30" />,
                link: "https://expressjs.com"
              },
              {
              name: <Icon icon={reduxIcon} width="30" height="30" />,
              link: "https://redux.js.org/"
              },
              {
              name: <Icon icon={reduxSaga} width="30" height="30" />,
              link: "https://redux-saga.js.org/"
              },
              { 
              name: <Icon icon={knexIcon} width="30" height="30" />,
              link: "http://knexjs.org/"
              }
            ]}
            path={"https://hackton.co/"}
          />

          <Divider />
          <CardItem
            date={"Oct 2019"}
            image={MudGame}
            title={"Mud Game"}
            details={`This is a multiplayer adventure maze game with chat functionality
                        that allows players commuicate with themselves. The present version is 
                        for desktop only.`}
            shortdeet={"Technologies"}
            techlist={[
              {
                name: <Icon icon={pythonIcon} width="30" height="30" />,
                link: "https://www.python.org"
              },
              {
                name: <Icon icon={javascriptIcon} width="30" height="30" />,
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              },
              {
                name: <Icon icon={djangoIcon} width="30" height="30" />,
                link: "https://www.djangoproject.com/"
              },
              {
                name: <Icon icon={reactIcon} width="30" height="30" />,
                link: "https://reactjs.org"
              },
              {
                name: <Icon icon={pusherIcon} width="30" height="30" />,
                link: "https://pusher.com/docs"
              },
              {
                name: <Icon icon={gitIcon} width="30" height="30" />,
                link: "https://git-scm.com"
              },
              {
                name: <Icon icon={herokuIcon} width="30" height="30" />,
                link: "https://dashboard.heroku.com"
              }
            ]}
            path={"https://mud-mount-doom.herokuapp.com/login"}
          />

          <Divider />
          <CardItem
            date={"Sept 2019"}
            image={AnonymousTeamFeedBack}
            title={"Anonymous Team Feedback"}
            details={`This application was developed to allow members of a team to 
                  give feedback anonymously to their teammates`}
            shortdeet={"Technologies"}
            techlist={[
              {
                name: <Icon icon={javascriptIcon} width="30" height="30" />,
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              },
              {
                name: <Icon icon={nodejsIcon} width="30" height="30" />,
                link: "https://nodejs.org/en/"
              },
              {
                name: <Icon icon={reactIcon} width="30" height="30" />,
                link: "https://reactjs.org"
              },
              {
                name: <Icon icon={graphqlIcon} width="30" height="30" />,
                link: "https://graphql.org"
              },
              {
                name: <Icon icon={expressIcon} width="30" height="30" />,
                link: "https://expressjs.com"
              },
              {
                name: <Icon icon={apollostackIcon} width="30" height="30" />,
                link: "https://www.apollographql.com/docs/apollo-server/"
              },
              {
                name: <Icon icon={postgresqlIcon} width="30" height="30" />,
                link: "https://www.postgresql.org"
              },
              {
                name: <Icon icon={sequelizeIcon} width="30" height="30" />,
                link: "https://sequelize.org"
              },
              {
                name: <Icon icon={d3Icon} width="30" height="30" />,
                link: "https://d3js.org"
              },

              {
                name: <Icon icon={gitIcon} width="30" height="30" />,
                link: "https://git-scm.com"
              },

              {
                name: <Icon icon={herokuIcon} width="30" height="30" />,
                link: "https://dashboard.heroku.com"
              },
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
              {
                name: <Icon icon={firebaseIcon} width="30" height="30" />,
                link: "https://firebase.google.com/"
              },
              {
                name: <Icon icon={reactIcon} width="30" height="30" />,
                link: "https://reactjs.org"
              },
              {
                name: <Icon icon={gitIcon} width="30" height="30" />,
                link: "https://git-scm.com"
              },
              {
                name: <Icon icon={netlifyIcon} width="30" height="30" />,
                link: "https://www.netlify.com/"
              }
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
              {
                name: <Icon icon={reactIcon} width="30" height="30" />,
                link: "https://reactjs.org"
              },
              {
                name: <Icon icon={gitIcon} width="30" height="30" />,
                link: "https://git-scm.com"
              },
              {
                name: <Icon icon={netlifyIcon} width="30" height="30" />,
                link: "https://www.netlify.com/"
              },
              {
                name: <Icon icon={expressIcon} width="30" height="30" />,
                link: "https://expressjs.com"
              }
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
              {
                name: <Icon icon={expressIcon} width="30" height="30" />,
                link: "https://expressjs.com"
              },
              {
                name: <Icon icon={gitIcon} width="30" height="30" />,
                link: "https://git-scm.com"
              },
              {
                name: <Icon icon={postgresqlIcon} width="30" height="30" />,
                link: "https://www.postgresql.org"
              },
              { name: "node mailer", link: "https://nodemailer.com/about/" },
              { name: "Jwt", link: "https://jwt.io" }
            ]}
            path={"https://the-politico.herokuapp.com/"}
          />
          <Divider />
        </ListItem>
      </ProjectList>
    </ContentLayout>
  );
};

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
