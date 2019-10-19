import React from "react";
import styled from "styled-components";
import { white, heading5, tabletMaxWidth, mobileMaxWidth, deskTopMaxWidth } from "../../~reusables/variables";
import ContentLayout from "../../~reusables/components/ContentLayout";
import MySection from "./MySection";
import aboutpascal from "../../~reusables/assets/images/mypic.png";

const AboutContent = ()=>{
    return (
        <ContentLayout>
            <MySection
              image={aboutpascal}
              imh={'50'}
              title={"BIO"}
              line1={`I am Pascal Chukwuemeka Ulor, a music lover, an
              adventurer and yes I'm a total geek.
              All my life I've had a flair for puzzles and this urged me to major in Mathematcis
              at the University of Ibadan Nigeria. My passion for programming was ingnited during my final year
              project where I had to analyse data using "Matlab" and "R", this made me realise that to efficient solve problems in my 
              field as a mathematician I needed some coding skills.`}
              line2={`Since graduating college I've been up and about in the tech industry. I've  lectured people in programming,
              worked and freelanced as an SEO specialist and also as a data analyst.
              Most recently I worked with "Andela" as a Software Engineer and I'm currently 
              running a Full-Stack Web Development and Computer Science program with Lambda School.`}
              shortdeet={"Technologies I work with"}
              techlist={[
                { name:<i className="icon-javascript-alt"/>, link: "any" },
                { name: <i className="icon-nodejs"/>, link: "any" },
                { name: <i className="icon-reactjs"/>, link: "any" },
                { name: <i className="icon-jquery"/>, link: "any" },
                { name: <i className="icon-python"/>, link: "any" },
                
                
                { name: <i className="icon-postgres"/>, link: "any" },
                { name: <i className="icon-mongodb"/>, link: "any" },
                { name: <i className="icon-mysql-alt"/>, link: "any" },
                { name: <i className="icon-d3"/>, link: "any" },
                
                { name: <i className="icon-git"/>, link: "any" },
                { name: <i className="icon-azure"/>, link: "any" },
                { name: <i className="icon-heroku"/>, link: "any" },
                { name: <i className="icon-bootstrap"/>, link: "any" },
                { name: <i className="icon-wordpress"/>, link: "any" },
                { name: <i className="icon-svg"/>, link: "any" },
                
              ]}
              path={"/"}
            />
        </ContentLayout>
    )
}

export default AboutContent;