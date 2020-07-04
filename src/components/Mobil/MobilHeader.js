import React from "react";
import styled from "@emotion/styled";
import MenuHamburgerButton from "../../assets/MenuHamburgerButton.svg";
import MobilMenuLion from "../../assets/MobilMenuLion.svg";

const MobilHeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-height: 70px;
  min-height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #0777b7;
`;

const MenuIcon = styled.img`
  min-width: 50px;
`;

const LionImage = styled.img`
  max-width: 45px;
`;

const HeaderTitle = styled.p`
  color: white;
  font-size: 2rem;
`;

export default function MobilHeader() {
  return (
    <MobilHeaderContainer>
      <MenuIcon src={MenuHamburgerButton} />
      <HeaderTitle>SLS</HeaderTitle>
      <LionImage src={MobilMenuLion} />
    </MobilHeaderContainer>
  );
}
