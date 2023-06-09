import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/img/footer-bg.jpg";
import CopyRight from "./Copy";
import FooterSocial from "./FooterSocial";
import LogoAddress from "./LogoAddress";
import Opening from "./Opening";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <ContentContainer>
          <Div>
            <FooterSocial />
            <Opening />
            <LogoAddress />
          </Div>
        </ContentContainer>
        <FooterOverlay />
        <CopyDiv>
          <CopyRight />
        </CopyDiv>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 420px;
  background: #333;
`;

const FooterOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: -1;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  height: 100%;
  @media (max-width: 580px) {
    flex-direction: column-reverse;
  }
`;

const CopyDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export default Footer;
