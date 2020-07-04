import React from "react";
import styled from "@emotion/styled";
import AboutCard from "../components/Cards/AboutCard";

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

export default function Home() {
  return (
    <Container>
      <AboutCard />
    </Container>
  );
}
