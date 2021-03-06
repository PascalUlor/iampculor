import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import {
  tabletMaxWidth,
  mobileMaxWidth,
  largeWidth,
  extraLargeWidth
} from "../../~reusables/variables";

const MySection = ({ image, title, line1, line2, shortdeet, techlist, path, details }) => {
  return (
    <Card>
      <Content>
        <Description>
          <StyledDetails>
            <BioHeader>{title}</BioHeader>
            <Bio>
            <br />
            {details.line1}
            <br />
            <br />
            {details.line2}
            <br />
            </Bio>
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
    padding-left: 2rem;
  }

  @media (max-width: ${mobileMaxWidth}) {
    flex-direction: column-reverse;
    width: 100%;
    margin: 2rem auto;
    padding-left: 2rem;
  }
`;

const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  @media (max-width: 1402px){
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: calc(100vh - 80rem) 0;
    margin: 2rem auto;
    margin-bottom: calc(100vh - 40rem);
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
  
`;

const StyledDetails = styled.div`
  padding: 5px;
  font-weight: 400
`;

const Bio = styled.div`
padding: 0 0 0 20px;
line-height: 1.5;
@media (max-width: ${tabletMaxWidth}) {
    justify-content: center;
    align-items: center;
    max-width: 100%;
    padding: 3px;
    margin: 0 auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    text-align: justify;
    word-wrap: break-word;
    max-width: 100%;
    padding: 3px;
    line-height: 1.5;
  }
`;

const ShortDeet = styled.strong`
display: flex;
margin: 1rem 0;
  font-style: italic;
  font-weight: 500;
  text-transform: uppercase;
`;

const BioHeader = styled.div`
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
    border-radius: 20px;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  @media (min-width: ${extraLargeWidth}) {
    width: 50%;
  }

  @media (max-width: 1402px){
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    margin: 2rem auto;
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
`;

const DetailedList = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 0;
  padding-left: 1rem;
  position: relative;
  overflow: hidden;
  a {
    display: inline-block;
    /* background-color: rgba(175, 34, 34, 0.8); */
    background-color: rgba(0, 0, 0, 0.3);
    color: #000;
    padding: 4px 8px;
    font-size: 1.5rem;
  }
`;
export default MySection;
