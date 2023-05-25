import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/Bs";
import styled from "styled-components";

const FooterSocial = () => {
  return (
    <>
      <Column>
        <Follow>Follow Us!!</Follow>
        <Row>
          {" "}
          <Div>
            <BsFacebook />{" "}
          </Div>
          <Div>
            <BsInstagram />{" "}
          </Div>
          <Div>
            <BsTwitter />
          </Div>
        </Row>
      </Column>
    </>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Follow = styled.div`
  display: flex;
  margin: 24px 0;
  font-size: 42px;
`;
const Div = styled.div`
  display: flex;
  font-size: 32px;
  margin: 24px 16px;
`;

export default FooterSocial;
