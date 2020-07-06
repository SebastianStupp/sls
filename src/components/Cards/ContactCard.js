import React from "react";
import styled from "@emotion/styled";
import Menu from "../Menu";
import ContactForm from "../ContactForm";

const MainCardContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  background: white;
  border-radius: 20px;
`;

const CardContent = styled.div`
  text-align: center;
  flex-basis: 57%;
  padding: 5px;
  margin: 5px;
`;

const GoogleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 30%;
`;

const Google = styled.iframe`
  width: 500px;
  height: 500px;
`;

export default function ContactCard() {
  return (
    <MainCardContainer>
      <Menu />
      <CardContent>
        <ContactForm />
      </CardContent>
      <GoogleCardContainer>
        <Google src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.4414716363194!2d6.748711316127989!3d50.91554997954219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf394c7bd0b167%3A0xe6c484e124f1bfc3!2sSLS-Sicherheitsservice!5e0!3m2!1sde!2sde!4v1594027125256!5m2!1sde!2sde" />
      </GoogleCardContainer>
    </MainCardContainer>
  );
}
