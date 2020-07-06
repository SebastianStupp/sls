import React from "react";
import styled from "@emotion/styled";

const FormContainer = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FirstName = styled.input`
  width: 50%;
  height: 50px;
  border: 2px solid black;
  margin: 20px;
`;

const SecondName = styled.input`
  width: 50%;
  height: 42px;
  border: 2px solid black;
  margin: 20px;
`;

const Email = styled.input`
  width: 50%;
  height: 42px;
  border: 2px solid black;
  margin: 20px;
`;

const PhoneNumber = styled.input`
  width: 50%;
  height: 42px;
  border: 2px solid black;
  margin: 20px;
`;

const Message = styled.input`
  width: 50%;
  height: 200px;
  border: 2px solid black;
  margin: 20px;
`;

const SubmitButton = styled.button`
  width: 100px;
  height: 50px;
  border: 2px solid black;
  align-self: center;
  margin: 20px;
`;

export default function ContactForm() {
  return (
    <FormContainer>
      <FirstName />
      <SecondName />
      <Email />
      <PhoneNumber />
      <Message />
      <SubmitButton>Senden</SubmitButton>
    </FormContainer>
  );
}
