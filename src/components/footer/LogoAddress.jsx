import React from "react";
import styled from "styled-components";
import { FooterLogo } from "./FooterLogo";

const LogoAddress = () => {
  return (
    <Div>
      <FooterLogo />
      {/* <Address>Some Address St</Address>
      <Address>eh83jo, Edinburgh</Address> */}
    </Div>
  );
};

const Address = styled.p`
  margin-bottom: -20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export default LogoAddress;
