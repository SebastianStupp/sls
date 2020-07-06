import React from "react";
import styled from "@emotion/styled";
import LogoNolden from "../assets/LogoNolden.svg";
import LogoAnton from "../assets/LogoAnton.svg";
import LogoHeinemann from "../assets/LogoHeinemann.svg";
import LogoRichterFrenzel from "../assets/LogoRichterFrenzel.svg";
import LogoGgm from "../assets/LogoGgm.svg";
import { keyframes } from "@emotion/core";

const SlideLeftAnimation = keyframes` 
    10% {left:0;}
    20%{left:-350px;}
    30%{left:-700px;}
    40%{left:-1050px;}
    50%{left:-1450px;}
    60%{left:-1450px;}
    70%{left:-1050px;}
    80%{left:-700px;}
    90%{left:-350px;}
    100% {left:0;}
`;

const Container = styled.div`
  display: flex;
  min-width: 40%;
  margin-right: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
`;

const SlideShowContainer = styled.div`
  width: 350px;
  margin: 0 auto;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  width: 2150px;
  position: relative;
  animation: ${SlideLeftAnimation} 16s linear infinite 2s;

  :hover {
    animation-play-state: paused;
    cursor: pointer;
  }
`;

const Slide = styled.a`
  width: 350px;
  height: 200px;
  float: left;

  :nth-of-type(1) {
    background: url(${LogoNolden});
  }

  :nth-of-type(2) {
    background: url(${LogoAnton});
  }
  :nth-of-type(3) {
    background: url(${LogoHeinemann});
  }

  :nth-of-type(4) {
    background: url(${LogoRichterFrenzel});
  }
  :nth-of-type(5) {
    background: url(${LogoGgm});
  }
`;

const SlideShowTitle = styled.h3`
  color: #3eb8fc;
`;

export default function SlideShow() {
  return (
    <Container>
      <SlideShowTitle>
        - Kunden die bereits von unserem Service profetieren -
      </SlideShowTitle>
      <SlideShowContainer>
        <SlideContainer>
          <Slide href="https://www.spedition-nolden.de/home.php" />
          <Slide href="https://www.anton-roehr.de/de/" />
          <Slide href="https://www.baeckerei-heinemann.com/" />
          <Slide href="https://www.richter-frenzel.de/" />
          <Slide href="http://gregoire-gmbh.de/" />
        </SlideContainer>
      </SlideShowContainer>
    </Container>
  );
}
