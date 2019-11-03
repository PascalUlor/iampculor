import styled from "styled-components";
import {
  red,
  mobileMaxWidth,
  tabletMaxWidth,
} from "../variables";

export const StyledFooter = styled.footer`
  height: 50px;
  background: ${red};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: fixed;
  bottom: 0;
  height: 56px;
  width: 100%;
  > * {
    color: #444;
  }
  a {
    color: #444;
    text-decoration: underline;
  }

  @media (max-width: ${tabletMaxWidth}) {
    display: flex;
  }

  @media (max-width: ${mobileMaxWidth}) {
    display: flex;
    width: 100%;
  }
`;

export const FooterText = styled.div`
  font-size: 18px;
 font-weight: 500
`;
