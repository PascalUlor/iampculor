import React from "react";
import { Social } from "../atoms/MobileNavStyles";

const MediaIcons = () => {
  return (
    <Social>
      <a
        rel="me"
        href="https://www.linkedin.com/in/pascal-ulor/"
        title="linkedin"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a rel="me" href="https://github.com/PascalUlor" title="github">
        <i className="fab fa-github-square" />
      </a>
      <a rel="me" href="https://twitter.com/pc_codes" title="twitter">
        <i className="fab fa-twitter-square" />
      </a>
      <a rel="me" href="mailto:pascalulor@yahoo.com" title="email">
        <i className="far fa-envelope" />
      </a>
    </Social>
  );
};

export default MediaIcons;
