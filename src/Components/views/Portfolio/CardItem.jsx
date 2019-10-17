import React from "react";
import styled from "styled-components";
import { tabletMaxWidth, mobileMAxWidth } from "../../~reusables/variables";

const CardItem = ({ date, image, title, details, shortdeet, techlist }) => {
  return (
    <Card>
      <span className="date">{date}</span>
      <Content>
        <Description>
          <StyledDetails>
            <ProjectTitle>{title}</ProjectTitle>
            <ShortDeet>{shortdeet}</ShortDeet>
            <br />
            {details}
            {techlist && (
              <DetailedList>
                {techlist.map(tech => {
                  return <ListItem>{tech}</ListItem>;
                })}
              </DetailedList>
            )}
          </StyledDetails>
        </Description>
        <Demo>
          <img src={image} alt="" />
        </Demo>
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
  @media (max-width: ${tabletMaxWidth}) {
    margin: 2rem auto;
  }

  @media (max-width: ${mobileMAxWidth}) {
    margin: 2rem auto;
  }

`;

const Content = styled.div`
  display: flex;
  padding: 0;
  @media (max-width: ${tabletMaxWidth}) {
    flex-direction: column;
    width: 100%;
    margin: 2rem auto;
  }

  @media (max-width: ${mobileMAxWidth}) {
    flex-direction: column;
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

  @media (max-width: ${mobileMAxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }
`;

const StyledDetails = styled.p`
  padding: 5px;
`;

const ShortDeet = styled.strong`
  font-style: italic;
  font-weight: 500;
`;

const ProjectTitle = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 0.3em;
  -webkit-font-smoothing: antialiased;
`;

const Demo = styled.div`
  padding: 5px;
  width: 50%;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1400px) {
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

  @media (max-width: ${mobileMAxWidth}) {
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
  list-style: disc;
`;

const ListItem = styled.li`
  display: block;
  margin: 0;
  padding-left: 2rem;
  position: relative;
  overflow: hidden;
`;
export default CardItem;
