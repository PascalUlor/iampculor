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
      <a rel="me" href="https://twitter.com/pc_codes" title="github">
        <i className="fab fa-twitter-square" />
      </a>
    </Social>
  );
};

export default MediaIcons;
