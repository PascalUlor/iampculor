import styled from "styled-components";
import { tabletMaxWidth, mobileMaxWidth, red, extraLargeWidth } from "../../~reusables/variables";

export default styled.div`
  width: ${props => (props.size ? `${props.size / 4}%` : "20%")};
  height: 1px;
  background: #e0e0e0;
  margin: ${props =>
    props.size ? `${props.size}px auto ${props.size}px` : "16px auto"};
  border-bottom: 1px solid ${red};
  @media (max-width: ${tabletMaxWidth}) {
    width: ${props => (props.size ? `${props.size / 4}%` : "100%")};
    margin: ${props =>
      props.size ? `${props.size}px auto ${props.size}px` : "16px auto"};
  }
  @media (max-width: ${mobileMaxWidth}) {
    width: ${props => (props.size ? `${props.size / 4}%` : "100%")};
    margin: ${props =>
      props.size ? `${props.size}px auto ${props.size}px` : "16px auto"};
  }
  @media (min-width: ${extraLargeWidth}) {
    width: ${props => (props.size ? `${props.size / 4}%` : "100%")};
    margin: ${props =>
      props.size ? `${props.size}px auto ${props.size}px` : "16px auto"};
  }
`;
