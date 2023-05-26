import React from "react";
import styled from "styled-components";
import CTAButton from "../misc/CTABUtton";

const HeroContent = () => {
  return (
    <Content>
      <h2>Welcome to Talento</h2>
      <Text>
        We envisage a nimble and adaptable partnership with HR professionals and
        people managers in curating HR architectures and building people
        capabilities. As enablers, we commit ourselves to a more pragmatist and
        personalized approach in working together with partners and clients.{" "}
      </Text>
      <CTAButton>{"Contact Us"}</CTAButton>
    </Content>
  );
};
const Content = styled.div`
  color: white;
  width: fit-content;
  text-align: left;
  font-weight: 500;
`;
const Text = styled.p`
  max-width: 50%;
`;

export default HeroContent;
