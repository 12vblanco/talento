import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img1 from "../../assets/img/hr3.jpg";
import img2 from "../../assets/img/hr4.jpg";
import CTAButton from "../misc/CTABUtton";

const Section = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Div id="about">
        <Img src={img1} />
        <TextDiv>
          <H1>About Talento</H1>
          <H4>Professional Support</H4>
          <P>
            We are a diverse group of HR professionals that provide service and
            support to your organization’s Talent Management needs. We aim to be
            present at any of the stages or in the full cycle of your integrated
            Talent Management process.
          </P>
          <Link to="/contact">
            <CTAButton>{"Contact Us"}</CTAButton>
          </Link>{" "}
        </TextDiv>
      </Div>
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
  @media (max-width: 971px) {
    flex-direction: column-reverse;
  }
`;

const DivColumn = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  background: #333;
  @media (max-width: 971px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 50vw;
  height: 50vw;
  min-height: 340px;
  min-width: auto;
  object-fit: cover;
  @media (max-width: 971px) {
    width: 100%;
    min-width: auto;
  }
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-height: 50vw;
  overflow: hidden;
  padding: 38px 66px;

  @media (max-width: 903px) {
    margin: 32px 0;
    max-width: 100%;
    max-height: fit-content;
    justify-content: center;
    align-items: center;
    padding: 12px;

    flex: 1;
  }
  @media (max-width: 440px) {
    align-items: flex-start;
    margin-left: 12px;
  }
  /* @media (max-width: 1060px) {
    padding: 32px;
  } */
`;

const H1 = styled.h1`
  @media (max-width: 1060px) {
    font-size: 1.9rem;
  }
`;
const H4 = styled.h4`
  @media (max-width: 1060px) {
    font-size: 1.5rem;
  }
  @media (max-width: 440px) {
    text-align: left;
  }
`;
const P = styled.p`
  margin-bottom: 42px;

  @media (max-width: 971px) {
    max-width: 80%;
  }
  @media (max-width: 440px) {
    max-width: 92%;
  }
`;

export default Section;
