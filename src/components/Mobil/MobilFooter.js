import React from "react";
import styled from "@emotion/styled";
import MobilEmailIcon from "../../assets/MobilEmailIcon.svg";
import MobilFacebookIcon from "../../assets/MobilFacebookIcon.svg";
import MobilInstagramIcon from "../../assets/MobilInstagramIcon.svg";
import MobilXingIcon from "../../assets/MobilXingIcon.svg";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 41px;
  max-height: 41px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
`;

export default function MobilFooter() {
  return (
    <FooterContainer>
      <img src={MobilEmailIcon} />
      <img src={MobilFacebookIcon} />
      <img src={MobilInstagramIcon} />
      <img src={MobilXingIcon} />
    </FooterContainer>
  );
}
