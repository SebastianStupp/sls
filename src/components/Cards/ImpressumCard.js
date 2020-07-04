import React from "react";
import styled from "@emotion/styled";
import MenuLion from "../assets/MenuLion.svg";
import EmailIcon from "../assets/EmailIcon.svg";
import FacebookIcon from "../assets/FacebookIcon.svg";
import InstagramIcon from "../assets/InstagramIcon.svg";
import XingIcon from "../assets/XingIcon.svg";
import HomeLion from "../assets/HomeLion.svg";
import Navigation from "../utils/Navigation";

const MainCardContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  min-height: 500px;
  background: white;
  border-radius: 20px;
`;

const CardContent = styled.div`
  text-align: center;
  flex-basis: 50%;
  padding: 5%;
  margin-top: 3%;
`;

const CardContentTitle = styled.h2`
  color: #3fb7fc;
  font-size: 1.4rem;
`;

const CardMainContent = styled.p`
  margin-top: 10%;
  margin-bottom: 10%;
  font-size: 1.4rem;
  text-align: center;
  color: #838080;
`;

const CardFooterContent = styled.h3`
  font-size: 1.4rem;
  color: #3fb7fc;
`;

const CardImage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 3%;
`;

const MenuContainer = styled.div`
  flex-basis: 13%;
  height: 100%;
  background: #0777b7;
  border-radius: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
`;

const SocialMediaIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SocialMediaWrapperOne = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;
const SocialMediaWrapperTwo = styled.div`
  display: flex;
  justify-content: space-around;
`;

const HomeLionImage = styled.img`
  flex-basis: 37%;
  right: 7%;
  bottom: 25%;
  position: fixed;
`;

export default function MainCard() {
  return (
    <MainCardContainer>
      <MenuContainer>
        <img src={MenuLion} alt="Rundes Bild mit einem Löwenkopf" />
        <Navigation />
        <SocialMediaIconContainer>
          <SocialMediaWrapperOne>
            <img src={EmailIcon} alt="Ein Email Icon zum klicken" />
            <img src={FacebookIcon} alt="Ein Facebook Icon zum klicken" />
          </SocialMediaWrapperOne>
          <SocialMediaWrapperTwo>
            <img src={InstagramIcon} alt="Ein Instagram Icon zum klicken" />
            <img src={XingIcon} alt="Ein Xing Icon zum klicken" />
          </SocialMediaWrapperTwo>
        </SocialMediaIconContainer>
      </MenuContainer>
      <CardContent>
        <CardContentTitle>
          Willkommen beim SLS - SICHERHEITSSERVICE
        </CardContentTitle>
        <CardMainContent>
          Warum sollten Sie sich für unser Unternehmen entscheiden?
          Sicherheitsdienste gibt es viele, aber letztendlich ist es immer
          Vertrauenssache, welchem Unternehmen Sie sich anvertrauen, und wer für
          Sie die Sicherheit übernimmt. Wir sind zertifiziert, das heißt unser
          Personal ist professionell ausgebildet und auf der Basis deutscher
          Standards geprüft.
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
  );
}
