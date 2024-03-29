import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CTAButton from "../../misc/CTABUtton";

function Success() {
  return (
    <Container>
      <Div>
        <H1>Hi TalentO Partner,</H1>
        <Text>
          We have received your form and are thrilled to see that you have shown
          interest in Talento. We will get back to you in no time <br />
          Wishing you an amazing day ahead!
          <br />
          Talento Team
        </Text>
        <Link to="/home">
          <CTAButton> {"To Home"}</CTAButton>
        </Link>
      </Div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  padding-top: 40px;
  @media (max-width: 499px) {
    /* margin-top: 12%; */
    padding: 5%;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #333;
  padding: 0 10%;
  line-height: 1.5;
  width: 100vw;
  height: 80vh;
  @media (max-width: 499px) {
    margin-top: 12%;
    padding: 5%;
  }
`;

const H1 = styled.h2`
  font-family: "Montserrat";
  /* margin-top: 14px; */
  margin-bottom: 14px;
  color: #333;
  @media (max-width: 550px) {
    max-width: 90%;
    padding: 0 8px;
    margin-top: 144px;
    margin-bottom: 22px;
  }
`;
const Text = styled.p`
  font-family: "Montserrat";
  margin: 0 auto;
  margin-bottom: 44px;
  color: #333;
  max-width: 80%;
  @media (max-width: 550px) {
    margin-bottom: 42px;
    max-width: 90%;
  }
`;

export default Success;
