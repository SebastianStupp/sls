import React from "react";
import styled from "@emotion/styled";
import useWindowDimensions from "../Hooks/useMediaResize";
import MenuButton from "../assets/menubutton.svg";
import LockSmall from "../assets/locksmall.svg";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryBorder};
  min-height: 100px;
  max-height: 100px;
  position: fixed;
  left: 0;
  top: 0;
`;

const HeaderContent = styled.div`
  @media only screen and (max-width: 880px) {
    width: 100%;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5px;
  width: 60%;
  z-index: 1;
  position: fixed;
`;

const HeaderLink = styled.a`
  text-decoration: none;
  color: black;
`;

const BurgerButton = styled.img``;

const Lock = styled.img``;

const HeaderTitle = styled.h3`
  align-self: center;
`;

export default function Header() {
  const { width } = useWindowDimensions();

  return (
    <HeaderContainer>
      {width > 880 ? (
        <HeaderContent>
          <HeaderLink href="/">STARTSEITE</HeaderLink>
          <HeaderLink href="/">ÜBER UNS</HeaderLink>
          <HeaderLink href="/">DIENSTLEISTUNGEN</HeaderLink>
          <HeaderLink href="/">KONTAKT</HeaderLink>
          <HeaderLink href="/">IMPRESSUM</HeaderLink>
        </HeaderContent>
      ) : (
        <HeaderContent>
          <BurgerButton src={MenuButton} />
          <HeaderTitle>SLS-SicherheitsServie</HeaderTitle>
          <Lock src={LockSmall} />
        </HeaderContent>
      )}
    </HeaderContainer>
  );
}