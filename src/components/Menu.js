import React from "react";
import styled from "@emotion/styled";
import MenuLion from "../assets/MenuLion.svg";
import EmailIcon from "../assets/EmailIcon.svg";
import FacebookIcon from "../assets/FacebookIcon.svg";
import InstagramIcon from "../assets/InstagramIcon.svg";
import XingIcon from "../assets/XingIcon.svg";
import Navigation from "../utils/Navigation";

const MenuContainer = styled.div`
  flex-basis: 13%;
  height: 100%;
  background: #0777b7;
  border-radius: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: none;
`;

const MenuImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-grow: 1;
`;

const MenuImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: contain;
  position: relative;
`;

const MenuButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
`;

const SocialMediaIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  flex-grow: 2;
`;

const SocialMediaWrapperOne = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 30px;
  max-height: 25px;
  object-fit: fill;
  position: relative;
`;
const SocialMediaWrapperTwo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
  max-height: 25px;
  object-fit: fill;
`;

export default function Menu() {
  return (
    <MenuContainer>
      <MenuImageContainer>
        <MenuImage src={MenuLion} alt="Rundes Bild mit einem Löwenkopf" />
      </MenuImageContainer>
      <MenuButtonContainer>
        <Navigation />
      </MenuButtonContainer>
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
  );
}
