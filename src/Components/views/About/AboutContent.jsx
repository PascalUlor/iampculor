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
import awsIcon from "@iconify/icons-logos/aws";
import openaiIcon from "@iconify/icons-logos/openai-icon";
import ClaudeIcon from "../../~reusables/assets/images/claude.svg";
import AnthropicIcon from "../../~reusables/assets/images/anthropic.svg";
import GeminiIcon from "../../~reusables/assets/images/google-gemini.svg";
import ContentLayout from "../../~reusables/components/ContentLayout";
import MySection, { BioLink } from "./MySection";
import aboutpascal from "../../~reusables/assets/images/mypic.png";
import ContactForm from "./ContactForm";

const AboutContent = () => {
  return (
    <ContentLayout>
      <MySection
        image={aboutpascal}
        imh={"50"}
        title={"BIO"}
        resumeUrl={"https://res.cloudinary.com/donpcdocs/image/upload/fl_attachment/v1789813255/personal/Ulor_Pascal_Resume_Updated.pdf"}
        details={{
          line1: `I am Pascal Chukwuemeka Ulor, a mathematician, an adventurer, an Arsenal FC fan and a total geek. All my life I've had a flair for puzzles, and this motivated me to major in Mathematics at the University of Ibadan, Nigeria. My passion for programming was ignited during my final year project, when I had to analyze data using Matlab and R — that's when I realized that to solve problems efficiently as a mathematician, I needed to learn programming.`,

          line2: (
            <>
              As a backend-focused Full-Stack Software Engineer with over 7 years of experience, I've spent most of my career in the FinTech space — designing payment solutions, microservices, and APIs at companies like{" "}
              <BioLink href="https://business.woven.finance/login" target="_blank" rel="noopener noreferrer">Woven Finance</BioLink>, and{" "}
              <BioLink href="https://resource.payrix.com/" target="_blank" rel="noopener noreferrer">Payrix</BioLink>. Along the way I've moved into leadership roles, serving as Founding Software Engineer, and Senior Backend Engineer at Apace Inc. These experiences combined taught me to balance my core engineering tasks -systems architecture, API design, and CI/CD) with the people side of the job — mentoring engineers, building teams, and translating business goals into technical strategy.
            </>
          ),

          line3: `Today, I'm the Head of Engineering at Grey Invent, where I lead the engineering team, define our technical strategy, and work cross-functionally with product, design, and business stakeholders to ship reliable, scalable systems.
          We most recently launched Klout (https://www.kloutco.com), a platform that for creators and influencers to manage their finances and brand partnerships.`,
        }}
        shortdeet={"Technologies I work with"}
        techlist={[
          {
                name: <Icon icon={awsIcon} width="30" height="30" />,
                link: "https://aws.amazon.com",
              },
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
        path={"/"}
      />
      <ContactForm />
    </ContentLayout>
  );
};

export default AboutContent;
