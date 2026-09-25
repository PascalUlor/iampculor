import React from "react";
import styled from "styled-components";
import {
  tabletMaxWidth,
  mobileMaxWidth,
  red,
  white
} from "../../~reusables/variables";

const MySection = ({ image, title, line1, line2, shortdeet, techlist, path, details, resumeUrl }) => {
  return (
    <Card>
      <Content>
        <Description>
          <StyledDetails>
            <BioHeader>{title}</BioHeader>
            {resumeUrl && (
              <ResumeButton href={resumeUrl} download target="_blank" rel="noopener noreferrer">
                Download Resume
              </ResumeButton>
            )}
            <Bio>
            <br />
            {details.line1}
            <br />
            <br />
            {details.line2}
            <br />
            <br />
            {details.line3}
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
      </Content>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  width: 100%;
  span.date {
    position: relative;
    display: flex;
    align-items: center;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;

  @media (max-width: ${tabletMaxWidth}) {
    padding: 3px;
  }

  @media (max-width: ${mobileMaxWidth}) {
    padding: 3px;
  }
`;

const StyledDetails = styled.div`
  padding: 5px;
  font-weight: 400
`;

const Bio = styled.div`
padding: 0 0 0 20px;
font-weight: 300;
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
  @media (max-width: ${tabletMaxWidth}) {
    font-size: 24px;
  }
  @media (max-width: ${mobileMaxWidth}) {
    font-size: 20px;
  }
`;

export const BioLink = styled.a`
  color: ${red};
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1em;
  color: ${white};
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background: ${red};
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    color: rgba(255, 255, 255, 0.6);
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
