import React, { useState } from "react";
import styled from "@emotion/styled";
import ContactCard from "../components/Cards/ContactCard";
import MobilAboutCard from "../components/Mobil/MobilAboutCard";
import MobilFooter from "../components/Mobil/MobilFooter";
import MobilHeader from "../components/Mobil/MobilHeader";
import MobilMenu from "../components/Mobil/MobilMenu";
import useWindowDimensions from "../Hooks/useMediaResize";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1050px) {
    position: fixed;
    top: 0;
  }
`;

const HeaderContainer = styled.header`
  height: 10%;
  width: 100%;
  margin-bottom: 80px;
`;
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
`;
const FooterContainer = styled.footer`
  margin-top: 51px;
  height: 10%;
  width: 100%;
`;

export default function Home() {
  const { width } = useWindowDimensions();
  const [activeMenu, setActiveMenu] = useState(false);

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      setActiveMenu(!activeMenu);
    }
  };
  function openMenuOnClick() {
    setActiveMenu(!activeMenu);
  }
  return (
    <>
      {width > 1050 ? (
        <Container>
          <ContactCard />
        </Container>
      ) : (
        <>
          {activeMenu ? <MobilMenu closeMenu={closeModal} /> : null}
          <Container>
            <HeaderContainer>
              <MobilHeader OpenMenu={openMenuOnClick} />
            </HeaderContainer>
            <MainContainer>
              <MobilAboutCard />
            </MainContainer>
            <FooterContainer>
              <MobilFooter />
            </FooterContainer>
          </Container>
        </>
      )}
    </>
  );
}
