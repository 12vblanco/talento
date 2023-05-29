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
          <LogoText> Bespoke Talent Support</LogoText>
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
  width: 160px;
  height: auto;
  @media (max-width: 380px) {
  }
`;

const LogoText = styled.p`
  color: #333;
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  margin: 0;
  margin-top: -6px;
  font-weight: 600;
  @media (max-width: 380px) {
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
