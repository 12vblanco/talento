import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img1 from "../../assets/img/hr1.jpg";
import img2 from "../../assets/img/hr2.jpg";
import CTAButton from "../misc/CTAButton";

const Section = () => {
  return (
    <>
      {" "}
      <Div>
        <Img src={img1} />
        <TextDiv>
          <H1>About Talento</H1>
          <H4>Professional Talent Management Support</H4>
          <P>
            We are a diverse group of HR professionals that provide service and
            support to your organization’s Talent Management needs. We aim to be
            present at any of the stages or in the full cycle of your integrated
            Talent Management process.
          </P>
          <CTAButton>About us</CTAButton>
        </TextDiv>
      </Div>{" "}
      <DivColumn>
        <TextDiv>
          <H1>Talento Services</H1>
          <H4>Tailored Designs</H4>
          <P>
            We spend time understanding your goals, priorities, and anticipated
            changes that will affect the talent plans and structures of your
            organization. We are your talent design and implementing partners.
          </P>
          <Link to="/contact">
            <CTAButton>{"Contact Us"}</CTAButton>
          </Link>{" "}
        </TextDiv>{" "}
        <Img src={img2} />
      </DivColumn>
    </>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  background: #333;
  @media (max-width: 903px) {
    flex-direction: column-reverse;
  }
`;

const DivColumn = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  background: #333;
  @media (max-width: 903px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 50vw;
  height: 50vw;
  min-height: 340px;
  min-width: auto;
  object-fit: cover;
  @media (max-width: 903px) {
    width: 100%;
    min-width: auto;
  }
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 50vw;
  max-height: 50vw;
  overflow: hidden;
  padding: 38px 66px;
  @media (max-width: 903px) {
    margin: 32px 0;
    max-width: 100%;
    max-height: fit-content;
    flex: 1;
  }
  @media (max-width: 902px) {
    padding: 12px;
  }
  @media (max-width: 1060px) {
    padding: 32px;
  }
`;

const H1 = styled.h1`
  @media (max-width: 1060px) {
    font-size: 2.6rem;
  }
`;
const H4 = styled.h4`
  @media (max-width: 1060px) {
    font-size: 1.6rem;
  }
`;
const P = styled.p`
  @media (max-width: 1060px) {
    font-size: 1.1rem;
  }
`;

export default Section;
