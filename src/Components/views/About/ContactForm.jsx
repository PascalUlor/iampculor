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
import TextInput from "../../~reusables/components/TextInput";
import TextArea from "../../~reusables/components/TextArea";

const ContactForm = () => {
  return (
    <FormContainer>
    <FormTitle>Contact Me</FormTitle>
      <StyledForm className="text-center border border-light p-5">
          <TextInput
          title="Name"
            className="form-control mb-4"
          />
          <TextInput
          title="Email"
            className="form-control mb-4"
          />
          <TextArea
          label="Message"
            className="form-control mb-4"
          />
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
  @media (max-width: ${tabletMaxWidth}) {
    width: 100%;
    margin: 30rem 1rem;
  }
  @media (max-width: ${mobileMaxWidth}) {
    width: 100%;
    margin: 50rem 1rem;
  }
  `;


const StyledForm = styled.form`
  background: white;
  width: 100%;
  max-height: 100vh;
  padding-top: 4rem !important;
  a:hover {
    text-decoration: underline;
  }
  input:focus, textarea:focus {
    outline: none !important;
    border:1px solid red;
    box-shadow: 0 0 10px #719ECE;
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

const FormTitle = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 0.3em;
  -webkit-font-smoothing: antialiased;
`;

const StyledInput = styled.input`
padding: 1rem;
height: 30px;
width: 50%;
margin: 0 10rem;
`;

export default ContactForm;
