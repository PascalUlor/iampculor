import React from "react";
import { StyledFooter, FooterText } from "../atoms/Footer";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        ©{new Date().getFullYear()}
        Copyright:
        <a href="https://pascalulor.com">
          {" "}
          Pascal Ulor
        </a>
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;
