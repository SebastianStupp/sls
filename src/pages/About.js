import React from "react";
import styled from "@emotion/styled";
import AboutCard from "../components/Cards/AboutCard";
import WebBackground from "../assets/WebBackground.svg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${WebBackground});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Home() {
  return (
    <Container>
      <AboutCard />
    </Container>
  );
}
