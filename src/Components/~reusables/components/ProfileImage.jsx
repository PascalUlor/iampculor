import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { heading3, white } from "../variables/index";

const ProfileImage = ({ name, image, path }) => (
  <StyledImage>
    <NavLink to={path}>
      <div>
        <img src={image} alt="" />
      </div>
      <p>{name}</p>
    </NavLink>
  </StyledImage>
);
ProfileImage.defaultProps = {
  name: ""
};
ProfileImage.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string.isRequired
};

const StyledImage = styled.div`
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    border: 3px solid ${white};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 10rem;

    img {
      border-radius: inherit;
      width: inherit;
      height: inherit;
    }
  }

  p {
    width: 100%;
    padding: 0.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${heading3};
    font-weight: 900;
    text-transform: uppercase;
    color: ${white};
  }
`;

export default ProfileImage;
