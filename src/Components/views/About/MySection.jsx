import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import {
  tabletMaxWidth,
  mobileMaxWidth,
  largeWidth,
  extraLargeWidth
} from "../../~reusables/variables";

const MySection = ({ image, title, line1, line2, shortdeet, techlist, path, imh }) => {
  return (
    <Card>
      {/* <span className="date">{date}</span> */}
      <Content>
        <Description>
          <StyledDetails>
            <ProjectTitle>{title}</ProjectTitle>
            <br />
            {line1}
            <br />
            {line2}
            <br />
            <ShortDeet>{shortdeet}</ShortDeet>
            {techlist && (
              <DetailedList>
                {techlist.map((tech, i) => {
                  return (
                    <ListItem key={i}>
                      <a href={tech.link}>{tech.name}</a>
                    </ListItem>
                  );
                })}
              </DetailedList>
            )}
          </StyledDetails>
        </Description>
        <MyImage>
        {path && <NavLink to={path}>
        <img src={image} alt="" />
        </NavLink>}
        </MyImage>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  
  width: 100%;
  max-height: 300px;
  span.date {
    position: relative;
    display: flex;
    align-items: center;
  }
  @media (max-width: 1200px) {
    margin-bottom: 15rem;
  }

  @media (max-width: ${tabletMaxWidth}) {
    margin: 2rem auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    margin: 2rem auto;
  }
`;

const Content = styled.div`
  display: flex;
  padding: 0;
  @media (max-width: ${tabletMaxWidth}) {
    flex-direction: column-reverse;
    width: 100%;
    margin: 2rem auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    flex-direction: column-reverse;
    width: 100%;
    margin: 2rem auto;
  }
`;

const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  @media (max-width: ${tabletMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }
`;

const StyledDetails = styled.div`
  padding: 5px;
`;

const ShortDeet = styled.strong`
  font-style: italic;
  font-weight: 500;
  text-transform: uppercase;
`;

const ProjectTitle = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 0.3em;
  -webkit-font-smoothing: antialiased;
`;

const MyImage = styled.div`
  padding: 5px;
  width: 50%;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: inherit;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  @media (max-width: ${largeWidth}) {
    width: 100%;
    margin-top: 2rem;
  }
  @media (max-width: ${tabletMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }
  @media (min-width: ${extraLargeWidth}) {
    width: 50%;
  }
`;

const DetailedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: disc;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 0;
  padding-left: 1rem;
  position: relative;
  overflow: hidden;
  a {
    display: inline-block;
    background-color: rgba(175, 34, 34, 0.8);
    color: #fff;
    padding: 4px 8px;
    font-size: 1.5rem;
  }
`;
export default MySection;
