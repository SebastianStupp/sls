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
  min-height: 51px;
  max-height: 51px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
`;

const Link = styled.a`
  outline: none !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default function MobilFooter() {
  return (
    <FooterContainer>
      <img src={MobilEmailIcon} />
      <Link href="https://www.facebook.com/SLS.Sicherheit.Rhein.Erft/?ref=page_internal">
        <img src={MobilFacebookIcon} />
      </Link>
      <img src={MobilInstagramIcon} />
      <img src={MobilXingIcon} />
    </FooterContainer>
  );
}
