import styled from "styled-components";
import { tabletMaxWidth, mobileMaxWidth, red, extraLargeWidth } from "../../~reusables/variables";

export default styled.div`
  width: ${props => (props.size ? `${props.size / 4}%` : "20%")};
  height: 1px;
  background: #e0e0e0;
  margin: ${props =>
    props.size ? `${props.size}px auto ${props.size}px` : "30px auto 30px"};
  border-bottom: 1px solid ${red};
  @media (max-width: ${tabletMaxWidth}) {
    width: ${props => (props.size ? `${props.size / 4}%` : "100%")};
    margin: ${props =>
      props.size ? `${props.size}px auto ${props.size}px` : "300px auto 30px"};
  }
  @media (max-width: ${mobileMaxWidth}) {
    width: ${props => (props.size ? `${props.size / 4}%` : "100%")};
    margin: ${props =>
      props.size ? `${props.size}px auto ${props.size}px` : "300px auto 30px"};
  }
  @media (min-width: ${extraLargeWidth}) {
    width: ${props => (props.size ? `${props.size / 4}%` : "100%")};
    margin: ${props =>
      props.size ? `${props.size}px auto ${props.size}px` : "20rem auto 30px"};
  }
`;
