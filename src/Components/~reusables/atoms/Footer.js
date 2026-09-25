import styled from "styled-components";
import { mobileMaxWidth } from "../variables";

export const StyledFooter = styled.footer`
  height: 56px;
  background: rgba(145, 13, 13, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: fixed;
  bottom: 0;
  width: 100%;
  > * {
    color: rgba(255, 255, 255, 0.6);
  }
  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: underline;
  }
`;

export const FooterText = styled.div`
  font-size: 18px;
  font-weight: 500;
  @media (max-width: ${mobileMaxWidth}) {
    font-size: 14px;
    padding: 0 0.5rem;
    text-align: center;
  }
`;
