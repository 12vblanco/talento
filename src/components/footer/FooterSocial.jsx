import React from "react";
import styled from "styled-components";
import { Social } from "../../../Social";

const FooterSocial = () => {
  return (
    <>
      <Column>
        <Follow>Follow Us!!</Follow>
        <Row>
          <Social backgroundColor="#333" />
        </Row>
      </Column>
    </>
  );
};

const Column = styled.div`
  font-family: "Great Vibes", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Follow = styled.div`
  display: flex;
  font-size: 42px;
`;

export default FooterSocial;
