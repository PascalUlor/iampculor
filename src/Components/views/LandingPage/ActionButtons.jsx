import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { white } from "../../~reusables/variables";

const ActionButtons = ({ text, path }) => {
  return (
    <ButtonCover>
      <NavLink to={path}>
        <HomeButton>{text}</HomeButton>
      </NavLink>
    </ButtonCover>
  );
};

const ButtonCover = styled.div`
  font-size: 2em;
  &:hover div{
    color: rgba(255, 255, 255, 0.6);
  }
`;

const HomeButton = styled.div`
  text-transform: uppercase;
  font-weight: 300;
  text-decoration: none;
  opacity: 0.8;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.47);
  margin-bottom: 1em;
  border: 1px solid ${white};
  font-weight: 500;
  color: ${white};
  display: inline-block;
  padding: 0.4em 0.8em;
  line-height: 1;
  margin-right: 1em;
  text-decoration: none;
`;

export default ActionButtons;
