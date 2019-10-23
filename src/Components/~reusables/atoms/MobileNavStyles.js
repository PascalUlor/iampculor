import styled from "styled-components";
import {
  red,
  mobileMaxWidth,
  tabletMaxWidth,
  deskTopMaxWidth,
  white,
  smallSpace,
  heading4,
  mediumMaxWidth
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

  @media (max-width: ${mobileMaxWidth}) {
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
  @media (max-width: ${mediumMaxWidth}) {
    display: flex;
    flex-wrap: wrap;
  }
  a {
    color: rgba(255, 255, 255, 0.6);
    padding: 0;
    margin-right: 0.8em;
    font-size: ${heading4};
    display: inline-block;
    cursor: pointer;
    i {
      font-size: 2rem;
      transition: transform 0.25s ease-in;
      margin: 0 auto;
    }
    &:hover i {
      color: ${white};
      transform: scale(1.5);
    }
  }
`;

export const BackDrop = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  @media (max-width: ${tabletMaxWidth}) {
    &.open {
      display: block;
    }
  }

  @media (max-width: ${mobileMaxWidth}) {
    &.open {
      display: block;
    }
  }
`;
