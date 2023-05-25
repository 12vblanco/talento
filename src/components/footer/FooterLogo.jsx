import React from "react";
import styled from "styled-components";
import logo from "../../assets/T-logo.png";
import logo2 from "../../assets/logoWth.png";

export function FooterLogo({}) {
  return (
    <LogoContainer>
      <LogoRow>
        <LogoImage src={logo} alt="Company logo" />
        <LogoImage2 src={logo2} alt="Company logo" />
      </LogoRow>
      <Column>
        {" "}
        <CompanyName>TalentO </CompanyName>
        <LogoText>Your Bespoke</LogoText>
        <LogoText>Talent Support</LogoText>{" "}
      </Column>
    </LogoContainer>
  );
}
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoRow = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: space-around;
  margin: 24px 0;
`;

const LogoImage = styled.img`
  width: inherit;
  max-width: 90px;
  height: auto;
  margin-right: 1rem;
  @media (max-width: 380px) {
    width: 70px;
    height: 70px;
  }
`;

const LogoImage2 = styled.img`
  max-width: 160px;
`;

const CompanyName = styled.h1`
  font-size: 34px;
  text-align: left;
  margin: 0;
  @media (max-width: 380px) {
    font-size: 28px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoText = styled.h1`
  font-size: 15px;
  text-align: left;
  margin: 0;
  font-weight: 700;
  @media (max-width: 380px) {
    font-size: 28px;
  }
`;
