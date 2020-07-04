import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import PropTypes from "prop-types";
import Navigation from "../../utils/Navigation";

const animationStartRight = keyframes`

0%{
  left:-80%; top:0px; opacity:0;
  }
  
100%
{left:0%; top:0px; opacity: 1; 
}`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;

  animation: ${animationStartRight} 1.5s ease-in-out forwards;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 65%;
  top: 0;
  position: relative;
  background: #0777b7;
  border-radius: 0px 15px 15px 0px;
`;

export default function MobilMenu({ closeMenu }) {
  return (
    <ModalContainer onClick={closeMenu}>
      <MenuContainer>
        <Navigation />
      </MenuContainer>
    </ModalContainer>
  );
}

MobilMenu.propTypes = {
  closeMenu: PropTypes.func,
};
