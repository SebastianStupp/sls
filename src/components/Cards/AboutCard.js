import React from "react";
import styled from "@emotion/styled";
import Menu from "../../components/Menu";
import SlideShow from "../Slideshow";

const MainCardContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  min-height: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
`;

const CardContent = styled.div`
  text-align: center;
  flex-basis: 50%;
  padding: 5%;
  margin-top: 3%;
`;

const CardContentTitle = styled.h2`
  color: #3fb7fc;
  font-size: 3vh;
  width: 100%;
`;

const CardMainContent = styled.p`
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 2vh;
  text-align: center;
  color: #838080;
  width: 100%;
`;

const CardFooterContent = styled.h3`
  font-size: 2vh;
  color: #3fb7fc;
  width: 100%;
`;

export default function AboutCard() {
  return (
    <MainCardContainer>
      <Menu />
      <CardContent>
        <CardContentTitle />
        <CardMainContent>
          Unser Team arbeitet zu 100 % verlässlich und bietet Ihnen damit ein
          Maximum an Sicherheit. Alleine die ständige wachsende Kundenliste
          unserem Unternehmens ist ein klarer Beleg für unseren Erfolg. Unsere
          Kunden/-innen schätzen unsere absoluter Zuverlässigkeit, Diskretion
          und Vertrauen.
        </CardMainContent>
        <CardFooterContent>
          Durch regelmäßige Schulungen und Weiterbildungen sind alle
          Sicherheitsmitarbeiter stets auf dem neuesten Stand und können den
          Auftraggebern/-innen so ein hohes Dienstleistungsniveau bieten.
        </CardFooterContent>
      </CardContent>
      <SlideShow />
    </MainCardContainer>
  );
}
