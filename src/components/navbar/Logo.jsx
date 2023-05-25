import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";

export function Logo({}) {
  return (
    <LogoContainer>
      <Column>
        <Link to="/home">
          <LogoImage src={logo} alt="Company logo" />
          <LogoText>Your Bespoke Talent Support</LogoText>
          <LogoText></LogoText>
        </Link>
      </Column>
    </LogoContainer>
  );
}
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 100%;
  padding-left: 10%;
`;

const LogoImage = styled.img`
  width: 140px;
  height: auto;
  /* margin-right: 1rem; */
  @media (max-width: 380px) {
    width: 70px;
    height: 70px;
  }
`;

const LogoText = styled.h1`
  color: #333;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  margin: 0;
  font-weight: 600;
  @media (max-width: 380px) {
    font-size: 28px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
