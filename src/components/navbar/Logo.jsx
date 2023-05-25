import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

export function Logo({}) {
  return (
    <LogoContainer>
      <Column>
        <LogoImage src={logo} alt="Company logo" />

        <CompanyName>Your Bespoke</CompanyName>
        <CompanyName>Talent Support</CompanyName>
      </Column>
    </LogoContainer>
  );
}
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 140px;
  height: auto;
  margin-right: 1rem;
  padding-left: 42px;
  @media (max-width: 380px) {
    width: 70px;
    height: 70px;
  }
`;

const CompanyName = styled.h1`
  font-size: 15px;
  text-align: center;
  margin: 0;
  font-weight: 700;
  @media (max-width: 380px) {
    font-size: 28px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
