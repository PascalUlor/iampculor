import React from "react";
import { Icon } from '@iconify/react';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import reactIcon from '@iconify/icons-logos/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import jqueryIcon from '@iconify/icons-logos/jquery';
import expressIcon from '@iconify/icons-logos/express';
import pusherIcon from "@iconify/icons-logos/pusher";


import pythonIcon from '@iconify/icons-logos/python';
import djangoIcon from "@iconify/icons-logos/django";
import flaskIcon from '@iconify/icons-logos/flask';

import graphqlIcon from '@iconify/icons-logos/graphql';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import mongodbIcon from '@iconify/icons-logos/mongodb';

import mysqlIcon from '@iconify/icons-logos/mysql';
import d3Icon from '@iconify/icons-logos/d3';
import gitIcon from '@iconify/icons-logos/git-icon';
import azureIcon from '@iconify/icons-logos/azure';
import herokuIcon from '@iconify/icons-logos/heroku-icon';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import wordpressIcon from '@iconify/icons-logos/wordpress-icon';

import apollostackIcon from '@iconify/icons-logos/apollostack';
import firebaseIcon from '@iconify/icons-logos/firebase';
import knexIcon from '@iconify/icons-logos/knex';
import sequelizeIcon from '@iconify/icons-logos/sequelize';
import netlifyIcon from '@iconify/icons-logos/netlify';
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
          line1:`I am Pascal Chukwuemeka Ulor, a Jesus lover, an
              adventurer and a total geek.
              All my life I've had a flair for puzzles and this urged me to major in Mathematcis
              at the University of Ibadan Nigeria. My passion for programming was ingnited during my final year
              project when I had to analyse data using "Matlab" and "R", this made me realise that to efficiently solve problems in my 
              field as a mathematician I needed some coding skills.`,
        line2:`Since graduating college I've been up and about in the tech industry. I've  lectured people in programming,
              worked and freelanced as an SEO specialist and also as a data analyst.
              Most recently I worked with "Andela" as a Software Engineer and I'm currently 
              running a Full-Stack Web Development and Computer Science program with Lambda School.`
        }}
        shortdeet={"Technologies I work with"}
        techlist={[
          { name: <Icon icon={javascriptIcon} width="30" height="30" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
          { name: <Icon icon={nodejsIcon} width="30" height="30" />, link: "https://nodejs.org/en/" },
          { name: <Icon icon={reactIcon} width="30" height="30" />, link: "https://reactjs.org" },
          { name: <Icon icon={jqueryIcon} width="30" height="30" />, link: "https://jquery.com" },
          { name: <Icon icon={pythonIcon} width="30" height="30" />, link: "https://www.python.org" },
          { name: <Icon icon={djangoIcon} width="30" height="30" />, link: "https://www.djangoproject.com/" },
          { name: <Icon icon={flaskIcon} width="30" height="30" />, link: "http://flask.palletsprojects.com/en/1.1.x/" },
              {
                name: <Icon icon={pusherIcon} width="30" height="30" />,
                link: "https://pusher.com/docs"
              },
          {
            name: <Icon icon={graphqlIcon} width="30" height="30" />,
            link: "https://graphql.org"
          },
          { name: <Icon icon={expressIcon} width="30" height="30" />, link: "https://expressjs.com" },
          { name: <Icon icon={apollostackIcon} width="30" height="30" />, link: "https://www.apollographql.com/docs/apollo-server/" },
          { name: <Icon icon={postgresqlIcon} width="30" height="30" />, link: "https://www.postgresql.org" },
          { name: <Icon icon={sequelizeIcon} width="30" height="30" />, link: "https://sequelize.org" },
          { name: <Icon icon={knexIcon} width="30" height="30" />, link: "http://knexjs.org/" },
          { name: <Icon icon={mongodbIcon} width="30" height="30" />, link: "https://www.mongodb.com" },
          { name: <Icon icon={mysqlIcon} width="30" height="30" />, link: "https://www.mysql.com" },
          { name: <Icon icon={d3Icon} width="30" height="30" />, link: "https://d3js.org" },

          { name: <Icon icon={gitIcon} width="30" height="30" />, link: "https://git-scm.com" },
          { name: <Icon icon={firebaseIcon} width="30" height="30" />, link: "https://firebase.google.com/" },
          { name: <Icon icon={azureIcon} width="30" height="30" />, link: "https://azure.microsoft.com/en-us/" },
          { name: <Icon icon={herokuIcon} width="30" height="30" />, link: "https://dashboard.heroku.com" },
          {name: <Icon icon={netlifyIcon} width="30" height="30" />, link:'https://www.netlify.com/'},
          { name: <Icon icon={bootstrapIcon} width="30" height="30" />, link: "https://getbootstrap.com" },
          { name: <Icon icon={wordpressIcon} width="30" height="30" />, link: "https://wordpress.com/" },
          { name: <i className="icon-svg" width="30" height="30" />, link: "https://developer.mozilla.org/en-US/docs/Web/SVG" }
        ]}
        path={"/"}
      />
      <ContactForm />
    </ContentLayout>
  );
};

export default AboutContent;
