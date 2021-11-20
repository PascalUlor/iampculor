import React from "react";
import styled from "styled-components";
import ActionButtons from "./ActionButtons";
import {
  white,
  heading5,
  tabletMaxWidth,
  mobileMaxWidth,
  deskTopMaxWidth
} from "../../~reusables/variables";

const ContentArea = () => {
  return (
    <Container>
      <WelcomeText>
        <HeaderText>Hi, I am Pascal Ulor</HeaderText>
        <SubHeading>
          A Software Engineer with expertise in
          <br />
          <strong>front-end and back-end web development</strong>
          <br />
          and a <strong>comic buff</strong>
        </SubHeading>
      </WelcomeText>
      <BuutonWrap>
        <ActionButtons text={"About"} path="/about" />
        <ActionButtons text={"Portfolio"} path="/projects" />
      </BuutonWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1;
  -webkit-font-smoothing: antialiased;
  padding-left: 110px;
  padding-top: 130px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  font-size: ${heading5};
  color: ${white};
  @media screen and (max-width: ${deskTopMaxWidth}) {
    position: relative;
    padding: 40px 20px;
    background: 0 0;
    font-size: 10px;
  }
  @media screen and (max-width: ${tabletMaxWidth}) {
    font-size: 8px;
  }
  @media screen and (max-width: ${mobileMaxWidth}) {
    font-size: 7px;
  }
`;

const WelcomeText = styled.div`
  max-width: 840px;
  margin-left: 25%;
  @media screen and (max-width: ${deskTopMaxWidth}) {
    margin: 0;
  }
`;

const HeaderText = styled.div`
  font-size: 4em;
  font-weight: 500;
`;

const SubHeading = styled.h2`
  font-size: 3em;
  font-weight: 300;
  text-transform: none;
  strong {
    font-weight: 500;
  }
`;

const BuutonWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin: 5.15em auto;
  overflow: hidden;
`;

export default ContentArea;
