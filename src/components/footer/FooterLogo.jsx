import React from "react";
import styled from "styled-components";
import logo from "../../assets/T-logo.png";

export function FooterLogo({}) {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="Company logo" />
      <Column>
        {" "}
        <CompanyName>Talento </CompanyName>
        <LogoText>Your Bespoke</LogoText>
        <LogoText>Talent Support</LogoText>{" "}
      </Column>
    </LogoContainer>
  );
}
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 24px;
`;

const LogoImage = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 1rem;
  @media (max-width: 380px) {
    width: 70px;
    height: 70px;
  }
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
