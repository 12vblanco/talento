import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterSocial from "./FooterSocial";
import LogoAddress from "./LogoAddress";
import Opening from "./Opening";

const Footer = () => {
  return (
    <FooterContainer>
      <Div>
        <FooterSocial />
        <Opening />
        <LogoAddress />
      </Div>
      <CopyDiv>
        <H4>
          Web Victor Blanco {new Date().getFullYear()} &copy;
          <span>&nbsp;&nbsp;</span> <Terms to="#">Terms & Conditions</Terms>
        </H4>
      </CopyDiv>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 420px;
  background: #333;
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  width: 100%;
  height: fit-content;

  height: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const CopyDiv = styled.div`
  font-family: "Montserrat", sans-serif;

  display: flex;
  max-width: fit-content;
  margin: 0 auto;
  color: white;
  width: 100%;
  height: fit-content;
  background: #333;
`;

// const H3 = styled.div`
//   font-family: "Courgette", cursive;
//   font-size: 48px;
//   font-weight: 100;
//   @media (max-width: 660px) {
//     font-size: 26px;
//   }
// `;

const H4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  font-size: 14px;
`;
const Terms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

export default Footer;
