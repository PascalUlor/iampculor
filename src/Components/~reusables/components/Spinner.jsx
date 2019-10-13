import React from "react";
import { Triple } from "react-preloading-component";
import styled from "styled-components";
import { red } from "../variables/index";

const StyledSpinner = styled.div`
  margin: 10rem 0;
  color: ${red};
`;

export default function Spinner() {
  return (
    <StyledSpinner>
      <Triple size={80} />
    </StyledSpinner>
  );
}
