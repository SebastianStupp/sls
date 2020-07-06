import React from "react";
import styled from "@emotion/styled";
import UnderConstruction from "../../assets/UnderConstruction.svg";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 450px;
  border-radius: 30px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export default function MobilCard() {
  return (
    <>
      <CardContainer>
        <Image src={UnderConstruction} />
      </CardContainer>
    </>
  );
}
