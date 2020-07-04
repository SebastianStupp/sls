import React from "react";
import styled from "@emotion/styled";
import MenuHamburgerButton from "../../assets/MenuHamburgerButton.svg";
import MobilMenuLion from "../../assets/MobilMenuLion.svg";
import PropTypes from "prop-types";

const MobilHeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-height: 51px;
  min-height: 51px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #0777b7;
`;

const MenuIcon = styled.img``;

const LionImage = styled.img`
  max-width: 45px;
`;

const HeaderTitle = styled.p`
  color: white;
  font-size: 2rem;
`;

export default function MobilHeader({ OpenMenu }) {
  return (
    <MobilHeaderContainer>
      <MenuIcon src={MenuHamburgerButton} onClick={OpenMenu} />
      <HeaderTitle>SLS</HeaderTitle>
      <LionImage src={MobilMenuLion} />
    </MobilHeaderContainer>
  );
}

MobilHeader.propTypes = {
  OpenMenu: PropTypes.func,
};
