import React from "react";
import { Icon } from "@iconify/react";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import reactIcon from "@iconify/icons-logos/react";
import javascriptIcon from "@iconify/icons-logos/javascript";
import jqueryIcon from "@iconify/icons-logos/jquery";
// import expressIcon from '@iconify/icons-logos/express';
import expressjsDark from "@iconify/icons-skill-icons/expressjs-dark";
import pusherIcon from "@iconify/icons-logos/pusher";

import pythonIcon from "@iconify/icons-logos/python";
import djangoIcon from "@iconify/icons-logos/django";
import flaskIcon from "@iconify/icons-logos/flask";

import graphqlIcon from "@iconify/icons-logos/graphql";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import mongodbIcon from "@iconify/icons-logos/mongodb";

import mysqlIcon from "@iconify/icons-logos/mysql";
import d3Icon from "@iconify/icons-logos/d3";
import gitIcon from "@iconify/icons-logos/git-icon";
import azureIcon from "@iconify/icons-logos/azure";
import herokuIcon from "@iconify/icons-logos/heroku-icon";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import wordpressIcon from "@iconify/icons-logos/wordpress-icon";
import reduxIcon from "@iconify/icons-logos/redux";
import fileTypeTypescriptOfficial from "@iconify/icons-vscode-icons/file-type-typescript-official";
// import golangIcon from '@iconify/icons-skill-icons/golang';

import apollostackIcon from "@iconify/icons-logos/apollostack";
import firebaseIcon from "@iconify/icons-logos/firebase";
import knexIcon from "@iconify/icons-logos/knex";
import sequelizeIcon from "@iconify/icons-logos/sequelize";
import netlifyIcon from "@iconify/icons-logos/netlify";
import ContentLayout from "../../~reusables/components/ContentLayout";
import MySection from "./MySection";
import aboutpascal from "../../~reusables/assets/images/mypic.png";
import ContactForm from "./ContactForm";

const AboutContent = () => {
  return (
    <ContentLayout>
      <MySection
        image={aboutpascal}
        imh={"50"}
        title={"BIO"}
        details={{
          line1: `I am Pascal Chukwuemeka Ulor, a Jesus lover, an
              adventurer, an Arsenal FC fan and a total geek.
              All my life I've had a flair for puzzles and this urged me to major in Mathematics
              at the University of Ibadan Nigeria. My passion for programming was ignited during my final year
              project when I had to analyze data using "Matlab" and "R", this made me realize that to efficiently solve problems in my 
              field as a mathematician I needed some coding skills.`,

          line2: `As a Software Engineer with over 5 years experience I've realized that my prior experiences in SEO, content writing, and data analysis grants me a unique perspective when I'm building software solutions. 
        I have a good track record of in the FinTech (Financial Technology) space where I have built APIs and microservices for payment solutions and have also been heavily involved in designing systems and scaling services.
        My prior experience as an Engineering manager (and CTO) in a Fintech startup got me actively involved in coordinating and managing an engineering team.`,

          line3: `Most recently I'm part of a decentralized team of Software Engineers building resilient and innovative systems and in my spare time I mentor students on programming at Lighthouse Labs.`,
        }}
        shortdeet={"Technologies I work with"}
        techlist={[
          {
            name: <Icon icon={javascriptIcon} width="30" height="30" />,
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          },
          {
            name: (
              <Icon icon={fileTypeTypescriptOfficial} width="30" height="30" />
            ),
            link: "https://www.typescriptlang.org",
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
            name: <Icon icon={reduxIcon} width="30" height="30" />,
            link: "https://redux.js.org/",
          },
          {
            name: <Icon icon={jqueryIcon} width="30" height="30" />,
            link: "https://jquery.com",
          },
          {
            name: <Icon icon={pythonIcon} width="30" height="30" />,
            link: "https://www.python.org",
          },
          {
            name: <Icon icon={djangoIcon} width="30" height="30" />,
            link: "https://www.djangoproject.com/",
          },
          {
            name: <Icon icon={flaskIcon} width="30" height="30" />,
            link: "http://flask.palletsprojects.com/en/1.1.x/",
          },
          // { name: <Icon icon={golangIcon} width="30" height="30" />, link: "https://go.dev" },
          {
            name: <Icon icon={pusherIcon} width="30" height="30" />,
            link: "https://pusher.com/docs",
          },
          {
            name: <Icon icon={graphqlIcon} width="30" height="30" />,
            link: "https://graphql.org",
          },
          {
            name: <Icon icon={expressjsDark} width="30" height="30" />,
            link: "https://expressjs.com",
          },
          {
            name: <Icon icon={apollostackIcon} width="30" height="30" />,
            link: "https://www.apollographql.com/docs/apollo-server/",
          },
          {
            name: <Icon icon={postgresqlIcon} width="30" height="30" />,
            link: "https://www.postgresql.org",
          },
          {
            name: <Icon icon={sequelizeIcon} width="30" height="30" />,
            link: "https://sequelize.org",
          },
          {
            name: <Icon icon={knexIcon} width="30" height="30" />,
            link: "http://knexjs.org/",
          },
          {
            name: <Icon icon={mongodbIcon} width="30" height="30" />,
            link: "https://www.mongodb.com",
          },
          {
            name: <Icon icon={mysqlIcon} width="30" height="30" />,
            link: "https://www.mysql.com",
          },
          {
            name: <Icon icon={d3Icon} width="30" height="30" />,
            link: "https://d3js.org",
          },

          {
            name: <Icon icon={gitIcon} width="30" height="30" />,
            link: "https://git-scm.com",
          },
          {
            name: <Icon icon={firebaseIcon} width="30" height="30" />,
            link: "https://firebase.google.com/",
          },
          {
            name: <Icon icon={azureIcon} width="30" height="30" />,
            link: "https://azure.microsoft.com/en-us/",
          },
          {
            name: <Icon icon={herokuIcon} width="30" height="30" />,
            link: "https://dashboard.heroku.com",
          },
          {
            name: <Icon icon={netlifyIcon} width="30" height="30" />,
            link: "https://www.netlify.com/",
          },
          {
            name: <Icon icon={bootstrapIcon} width="30" height="30" />,
            link: "https://getbootstrap.com",
          },
          {
            name: <Icon icon={wordpressIcon} width="30" height="30" />,
            link: "https://wordpress.com/",
          },
          {
            name: <i className="icon-svg" width="30" height="30" />,
            link: "https://developer.mozilla.org/en-US/docs/Web/SVG",
          },
        ]}
        path={"/"}
      />
      <ContactForm />
    </ContentLayout>
  );
};

export default AboutContent;
