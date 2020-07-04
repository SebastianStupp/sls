import React, { useState } from "react";
import styled from "@emotion/styled";
import HomeCard from "../components/Cards/HomeCard";
import useWindowDimensions from "../Hooks/useMediaResize";
import MobilHomeCard from "../components/Mobil/MobilHomeCard";
import MobilFooter from "../components/Mobil/MobilFooter";
import MobilHeader from "../components/Mobil/MobilHeader";
import MobilMenu from "../components/Mobil/MobilMenu";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  height: 100%;
  width: 85%;
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
          <HomeCard />
        </Container>
      ) : (
        <>
          {activeMenu ? <MobilMenu closeMenu={closeModal} /> : null}
          <Container>
            <HeaderContainer>
              <MobilHeader OpenMenu={openMenuOnClick} />
            </HeaderContainer>
            <MainContainer>
              <MobilHomeCard />
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
