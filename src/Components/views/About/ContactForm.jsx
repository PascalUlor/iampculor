import React from "react";
import styled from "styled-components";
import {
  red,
  white,
  heading5,
  tabletMaxWidth,
  mobileMaxWidth,
  deskTopMaxWidth
} from "../../~reusables/variables";

const ContactForm = () => {
  return (
    <FormContainer>
      <StyledForm>
          <StyledInput/>
      </StyledForm>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-top: 1px solid ${red};
  margin: 15rem auto;
  @media (max-width: 500px) {
    margin: 30rem auto;
  }
  `;


const StyledForm = styled.form`
  background: white;
  width: 50%;
  max-height: 100vh;
  padding-top: 4rem !important;
  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1400px) {
    width: 60%;
  }

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 1050px) {
    width: 85%;
  }

  @media (max-width: 870px) {
    width: 95%;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 1rem !important;
  }
`;

const StyledInput = styled.input`
padding: 1rem;
height: 30px;
`;

export default ContactForm;
