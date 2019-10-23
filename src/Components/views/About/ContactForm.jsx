import React, { useState } from "react";
import styled from "styled-components";
import {
  white,
  red,
  tabletMaxWidth,
  mobileMaxWidth
} from "../../~reusables/variables";
import TextInput from "../../~reusables/components/TextInput";
import TextArea from "../../~reusables/components/TextArea";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setUserInput(userInput => ({ ...userInput, [name]: value }));
  };

  /**
   * Netlify form contection functions
   * @param {*} data
   */

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...userInput })
    })
      .then(() => {
        alert("Message Sent Successfully");
      })
      .catch(error => alert(error));
    setUserInput({
      name: "",
      email: "",
      message: ""
    });
    e.preventDefault();
  };

  return (
    <FormContainer>
      <FormTitle>Contact Me</FormTitle>
      <StyledForm
        className="text-center border border-light p-5"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <TextInput
          type={"text"}
          title="Name"
          className="form-control mb-4"
          id="title"
          value={userInput.name}
          name={"name"}
          onChange={handleInputChange}
        />
        <TextInput
          type={"email"}
          title="Email"
          className="form-control mb-4"
          id="title"
          value={userInput.email}
          name={"email"}
          onChange={handleInputChange}
        />
        <TextArea
          label="Message"
          className="form-control mb-4"
          name="message"
          value={userInput.message}
          onChange={handleInputChange}
          id="message"
          rows="3"
        />
        <FormButton type="submit">Send Message</FormButton>
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
  margin: 20rem auto;
  @media (max-width: 1402px) {
    margin: calc(100vh - 10rem) auto;
  }
  @media (max-width: ${tabletMaxWidth}) {
    width: 100%;
    margin: 40rem 1rem;
  }
  @media (max-width: ${mobileMaxWidth}) {
    width: 100%;
    margin: calc(100rem - 75vh) 1rem;
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
  input:focus,
  textarea:focus {
    outline: none !important;
    border: 1px solid red;
    box-shadow: 0 0 10px #719ece;
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

const FormButton = styled.button.attrs({
  type: "submit"
})`
  color: ${white};
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background: ${red};
  white-space: nowrap;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1rem 0 0 1rem;
  padding: 0.5rem 2rem;
  text-decoration: none !important;
`;
export default ContactForm;
