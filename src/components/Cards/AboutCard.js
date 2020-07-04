import React from "react";
import styled from "@emotion/styled";
import MenuLion from "../../assets/MenuLion.svg";
import EmailIcon from "../../assets/EmailIcon.svg";
import FacebookIcon from "../../assets/FacebookIcon.svg";
import InstagramIcon from "../../assets/InstagramIcon.svg";
import XingIcon from "../../assets/XingIcon.svg";
import Navigation from "../../utils/Navigation";
import UnderConstruction from "../../assets/UnderConstruction.svg";

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
  flex-basis: 87%;
  padding: 5%;
  margin-top: 3%;
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

export default function AboutCard() {
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
        <img src={UnderConstruction} />
      </CardContent>
    </MainCardContainer>
  );
}
