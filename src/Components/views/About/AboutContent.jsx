import React from "react";
import styled from "styled-components";
import { white, heading5, tabletMaxWidth, mobileMaxWidth, deskTopMaxWidth } from "../../~reusables/variables";
import ContentLayout from "../../~reusables/components/ContentLayout";
import MySection from "./MySection";
import aboutpascal from "../../~reusables/assets/images/aboutme.jpg";

const AboutContent = ()=>{
    return (
        <ContentLayout>
            My content
            <MySection
              image={aboutpascal}
              imh={'50'}
              title={"BIO"}
              details={`This application was developed to allow members of a team to 
                  give feedback anonymously to their teammates`}
              shortdeet={"Technologies I've worked with"}
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
              path={"/"}
              size={100}
            />
        </ContentLayout>
    )
}

export default AboutContent;