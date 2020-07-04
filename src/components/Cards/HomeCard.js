import React from "react";
import styled from "@emotion/styled";
import HomeLion from "../../assets/HomeLion.svg";
import Menu from "../../components/Menu";

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

const CardImage = styled.div`
  display: flex;
  flex-basis: 37%;
  min-width: 400px;
  justify-content: flex-end;
  padding: 3%;
`;

const HomeLionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: relative;
`;

export default function MainCard() {
  return (
    <>
      <MainCardContainer>
        <Menu />
        <CardContent>
          <CardContentTitle>
            Willkommen beim SLS - SICHERHEITSSERVICE
          </CardContentTitle>
          <CardMainContent>
            Warum sollten Sie sich für unser Unternehmen entscheiden?
            Sicherheitsdienste gibt es viele, aber letztendlich ist es immer
            Vertrauenssache, welchem Unternehmen Sie sich anvertrauen, und wer
            für Sie die Sicherheit übernimmt. Wir sind zertifiziert, das heißt
            unser Personal ist professionell ausgebildet und auf der Basis
            deutscher Standards geprüft.
          </CardMainContent>
          <CardFooterContent>
            Vertrauen Sie daher uns, SLS - Sicherheitsservice Ihrem
            professionellen Sicherheitsdienst in der Region.
          </CardFooterContent>
        </CardContent>
        <CardImage>
          <HomeLionImage
            src={HomeLion}
            alt="Großes rundes Bild mit einem Löwenkopf"
          />
        </CardImage>
      </MainCardContainer>
    </>
  );
}
