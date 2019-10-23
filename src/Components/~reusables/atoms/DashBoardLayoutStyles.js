import styled from "styled-components";
import { tabletMaxWidth, mobileMaxWidth, white, extraLargeWidth } from "../variables/index";

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;

  @media only screen and (max-width: ${tabletMaxWidth}) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  padding: 0px !important;
  overflow-y: scroll;
  -ms-overflow-style: none; // IE 10+
  scrollbar-width: none;
  margin: 0 auto;
  @media (min-width: ${extraLargeWidth}) {
    max-width: 100vw;
  }
  @media (max-width: ${tabletMaxWidth}) {
    min-width: 100vw;
    padding: 0rem;
  }

  @media (max-width: ${mobileMaxWidth}) {
    width: 100%;
    border: 1px solid transparent;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledSidebar = styled.aside`
  width: 22rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(145, 13, 13, 0.8);
  z-index: 100;


  @media screen and (max-width: ${mobileMaxWidth}) {
    width: 15rem;
  }


  @media (max-width: ${tabletMaxWidth}) {
    position: fixed;
    overflow: hidden;
    transform: translateX(-22rem);
    transition: transform 0.25s ease-in;

    &.active {
      position: fixed;
      transform: translateX(0rem);
      z-index: 100;
      height: calc(100vh - 100px);
      transition: transform 0.25s ease-in;
      border: 1px solid #cfedfe;
      border-left: none;
      border-top: none;
    }
  }

  .nav-items {
    border-top: 1px solid #cfedfe;
  }
`;

export const StyledNavItem = styled.div`
  display: flex;
  align-items: center;

  span.label {
    display: flex;
    align-items: center;
  }

  a {
    display: block;
    width: 100%;
    padding: 1rem;
    padding-left: 1.4rem;
    border-bottom: 1px solid #cfedfe;
    text-decoration: none;
    text-transform: uppercase;
    /* color: rgba(255, 255, 255, 0.6); */
    color: ${white};
    line-height: 1.4rem;
    font-weight: 500;
  }

  &:hover a {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const SocialMediaStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  padding-left: 1.4rem;
  margin-top: 5rem;
  border-bottom: 1px solid #cfedfe;
  text-transform: uppercase;
  color: ${white};
  font-weight: 500;
  line-height: 1.4rem;

  span.label {
    display: flex;
    width: 100%;
  }
  div {
    padding-right: 2rem;
    @media (max-width: ${tabletMaxWidth}) {
      padding-right: 5rem;
    }
    @media (max-width: ${mobileMaxWidth}) {
      padding-right: 0.5rem;
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
    &.active{
      display: block;
    }
`;
