import React from "react";
import PropTypes from "prop-types";
// import { NavLink } from 'react-router-dom';
import { SocialMediaStyles } from "../atoms/DashBoardLayoutStyles";
import MediaIcons from "./MediaIcons";

const SocialMedia = ({ icon, text }) => (
  <SocialMediaStyles>
    <span className="label">
      <i className="material-icons">{icon}</i>
      &nbsp; &nbsp;
      <span>{text}</span>
    </span>
    <MediaIcons />
  </SocialMediaStyles>
);

SocialMedia.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default SocialMedia;
