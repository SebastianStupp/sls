import React from "react";
import styled from "@emotion/styled";
import Facebook from "../assets/facebook.svg";
import Mail from "../assets/mail.svg";
import Insta from "../assets/instagram.svg";
import Xing from "../assets/xing.svg";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.primaryBorder};
  min-height: 70px;
  max-height: 70px;
  position: fixed;
  left: 0;
  bottom: 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <img src={Mail} />
        <img src={Facebook} />
        <img src={Insta} />
        <img src={Xing} />
      </FooterContent>
    </FooterContainer>
  );
}
