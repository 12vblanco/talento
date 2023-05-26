import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import CopyRight from "./Copy";
import FooterSocial from "./FooterSocial";
import LogoAddress from "./LogoAddress";
import Opening from "./Opening";

const Footer = () => {
  return (
    <>
      {" "}
      <FooterContainer>
        <Div>
          <FooterSocial />
          <Opening />
          <LogoAddress />
        </Div>
      </FooterContainer>
      <CopyRight />
    </>
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

// const H3 = styled.div`
//   font-family: "Courgette", cursive;
//   font-size: 48px;
//   font-weight: 100;
//   @media (max-width: 660px) {
//     font-size: 26px;
//   }
// `;

export default Footer;
