import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CTAButton from "../misc/CTABUtton";

const HeroContent = () => {
  return (
    <Content>
      <H1>Welcome to Talento</H1>
      <Text>
        We envisage a nimble and adaptable partnership with HR professionals and
        people managers in curating HR architectures and building people
        capabilities. As enablers, we commit ourselves to a more pragmatist and
        personalized approach in working together with partners and clients.{" "}
      </Text>
      <Link to="/contact">
        <CTAButton>{"Contact Us"}</CTAButton>
      </Link>{" "}
    </Content>
  );
};
const Content = styled.div`
  color: white;
  width: fit-content;
  text-align: left;
  font-weight: 500;
`;

const H1 = styled.h1`
  @media (max-width: 440px) {
    max-width: 90%;
  }
`;
const Text = styled.p`
  max-width: 58%;
  margin-bottom: 42px;

  @media (max-width: 858px) {
    max-width: 80%;
  }
  @media (max-width: 440px) {
    max-width: 92%;
  }
`;

export default HeroContent;
