import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import djangoIcon from "@iconify/icons-logos/django";
import pusherIcon from "@iconify/icons-logos/pusher";
import pythonIcon from "@iconify/icons-logos/python";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import reactIcon from "@iconify/icons-logos/react";
import javascriptIcon from "@iconify/icons-logos/javascript";
import awsIcon from "@iconify/icons-logos/aws";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";
import openaiIcon from "@iconify/icons-logos/openai-icon";
import reduxIcon from '@iconify/icons-logos/redux';
import reduxSaga from '@iconify/icons-logos/redux-saga';
// import expressIcon from "@iconify/icons-logos/express";
import expressjsDark from '@iconify/icons-skill-icons/expressjs-dark';
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
import ClaraWave from "../../~reusables/assets/images/clarawave.png";
import Klout from "../../~reusables/assets/images/klout.png";
import ClaudeIcon from "../../~reusables/assets/images/claude.svg";
import AnthropicIcon from "../../~reusables/assets/images/anthropic.svg";
import GeminiIcon from "../../~reusables/assets/images/google-gemini.svg";
import Divider from "../../~reusables/atoms/Divider";
import ContentLayout from "../../~reusables/components/ContentLayout";
import { mobileMaxWidth, red, tabletMaxWidth } from "../../~reusables/variables";

const PortfolioContent = () => {
  return (
    <ContentLayout>
      <ProjectList>
        <ListItem>
        <SectionHeading>Recent Projects</SectionHeading>
        <CardItem
            date={"2026"}
            image={Klout}
            title={"Klout"}
            details={`A platform for creators and influencers to manage their finances and brand partnerships, including AI chat agents built on Claude, Gemini, and ChatGPT. Worked on both the backend and frontend.`}
            shortdeet={"Technologies"}
            techlist={[
              {
                name: <Icon icon={awsIcon} width="30" height="30" />,
                link: "https://aws.amazon.com",
              },
              {
                name: <Icon icon={typescriptIcon} width="30" height="30" />,
                link: "https://www.typescriptlang.org",
              },
              {
                name: <Icon icon={postgresqlIcon} width="30" height="30" />,
                link: "https://www.postgresql.org",
              },
              {
                name: <Icon icon={gitIcon} width="30" height="30" />,
                link: "https://git-scm.com",
              },
              {
                name: <Icon icon={nodejsIcon} width="30" height="30" />,
                link: "https://nodejs.org/en/",
              },
              {
                name: <Icon icon={reactIcon} width="30" height="30" />,
                link: "https://reactjs.org",
              },
              {
                name: <img src={ClaudeIcon} width="30" height="30" alt="Claude" />,
                link: "https://claude.com",
              },
              {
                name: <img src={AnthropicIcon} width="30" height="30" alt="Anthropic" />,
                link: "https://www.anthropic.com",
              },
              {
                name: <img src={GeminiIcon} width="30" height="30" alt="Google Gemini" />,
                link: "https://gemini.google.com",
              },
              {
                name: <Icon icon={openaiIcon} width="30" height="30" />,
                link: "https://openai.com",
              },
            ]}
            path={"https://www.kloutco.com/"}
          />

        <Divider />

        <CardItem
            date={"2025"}
            image={ClaraWave}
            title={"ClaraWave"}
            details={`An AI-powered platform that automates scheduling, payroll, and billing for home care agencies, helping providers manage shifts, pay caregivers instantly, and stay compliant across private pay, Medicaid, and Medicare.`}
            shortdeet={"Technologies"}
            techlist={[
              {
                name: <Icon icon={awsIcon} width="30" height="30" />,
                link: "https://aws.amazon.com",
              },
              {
                name: <Icon icon={apollostackIcon} width="30" height="30" />,
                link: "https://www.apollographql.com/docs/apollo-server/",
              },
              {
                name: <Icon icon={typescriptIcon} width="30" height="30" />,
                link: "https://www.typescriptlang.org",
              },
              {
                name: <Icon icon={postgresqlIcon} width="30" height="30" />,
                link: "https://www.postgresql.org",
              },
              {
                name: <Icon icon={gitIcon} width="30" height="30" />,
                link: "https://git-scm.com",
              },
              {
                name: <Icon icon={nodejsIcon} width="30" height="30" />,
                link: "https://nodejs.org/en/",
              },
            ]}
            path={"https://www.clarawave.com/"}
          />

        <Divider />

        <SectionHeading spaced>Past Projects</SectionHeading>
        <CardItem
            date={"May 2021"}
            image='https://www.loom.com/share/625011cac161465382ffdaf8b9032d7c?sid=be0d53e2-8c37-4009-88bb-1aab34c04895'
            title={"LingoOwl"}
            details={`A SAS platform that leverages AI and professional language experts to translate documents securely.`}
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
                name: <Icon icon={expressjsDark} width="30" height="30" />,
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
                name: <Icon icon={graphqlIcon} width="30" height="30" />,
                link: "https://graphql.org"
              },
              {
                name: <Icon icon={apollostackIcon} width="30" height="30" />,
                link: "https://www.apollographql.com/docs/apollo-server/"
              },
            ]}
            path={"https://lingoowl.com/"}
          />

        <Divider />

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
                name: <Icon icon={expressjsDark} width="30" height="30" />,
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
                name: <Icon icon={expressjsDark} width="30" height="30" />,
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
                name: <Icon icon={expressjsDark} width="30" height="30" />,
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
                name: <Icon icon={expressjsDark} width="30" height="30" />,
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

const SectionHeading = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${red};
  margin: ${props => (props.spaced ? "3rem" : "0")} 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${red};

  @media (max-width: ${tabletMaxWidth}) {
    font-size: 1.1rem;
    margin: ${props => (props.spaced ? "2rem" : "0")} 0 1rem;
  }
`;

const ListItem = styled.li`
  display: block;
  margin: 0;
  padding-left: 2rem;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: ${mobileMaxWidth}) {
    &:first-child {
      padding-top: 0;
      line-height: 1.5;
      margin-top: 10px;
    }
  }
`;

export default PortfolioContent;
