import styled from "styled-components";
import {
  red,
  mobileMAxWidth,
  tabletMaxWidth,
  deskTopMaxWidth,
  white,
  smallSpace,
  heading4
} from "../variables";

export const Navbar = styled.nav`
  height: 50px;
  background: ${red};
  display: none;
  .fa-bars {
    font-size: ${heading4};
    position: absolute;
    right: ${smallSpace};
    top: ${smallSpace};
    color: ${white};
    display: block;
    cursor: pointer;
    z-index: 5;

    @media (max-width: ${tabletMaxWidth}) {
      display: flex;
    }
  }

  @media (max-width: ${tabletMaxWidth}) {
    display: flex;
  }

  @media (max-width: ${mobileMAxWidth}) {
    display: flex;
    width: 100%;
  }
`;

export const NavItems = styled.div`
  font-size: 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-width: 1px 0;
  padding: 0 20px;
  display: none;
  a {
    display: inline-block;
  }
  @media screen and (max-width: ${deskTopMaxWidth}) {
    display: block;
  }
`;

export const Social = styled.div`
  float: left;
  margin-top: 0.5rem;
  a {
    color: rgba(255, 255, 255, 0.6);
    padding: 0;
    margin-right: 0.5em;
    font-size: ${heading4};
    display: inline-block;
    cursor: pointer;
  }
`;
