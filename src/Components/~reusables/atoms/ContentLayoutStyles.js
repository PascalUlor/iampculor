import styled from "styled-components";
import {
  white,
  heading5,
  tabletMaxWidth,
  mobileMaxWidth,
  deskTopMaxWidth,
  extraLargeWidth
} from "../../~reusables/variables";
import { LinkButton } from "../../~reusables/atoms/Buttons";

export const ContentContainer = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none; // IE 10+
  scrollbar-width: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: relative;
  -webkit-font-smoothing: antialiased;
  background: #f4f4f4;
  max-height: 100vh;
  @media (min-width: ${extraLargeWidth}) {
    min-height: 100vh;
    max-width: 100vw;
    position: relative;
  }
`;

export const Layout = styled.div`
  max-height: 100vh;
  max-width: 1400px;
  padding: 50px;
  @media (min-width: ${extraLargeWidth}) {
    max-width: 100vw;
  }
`;

export const Inners = styled.div`
font-size: 16px;
margin-left: -50px;
`;

export const BackButton = styled(LinkButton)`
  font-size: 1.6rem;
  margin: 1rem 0 0 1rem;
  padding: 0 1rem;
`;
