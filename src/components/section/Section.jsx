import React from "react";
import styled from "styled-components";
import img1 from "../../assets/img/hr1.jpg";
import img2 from "../../assets/img/hr2.jpg";
import CTAButton from "../misc/CTABUtton";

const Section = () => {
  return (
    <>
      {" "}
      <Div>
        <Img src={img1} />
        <TextDiv>
          <H1>About TalentO</H1>
          <H4>Tailored support</H4>
          <P>
            We are a diverse group of HR professionals that provide service and
            support to your organization’s Talent Management needs. We aim to be
            present at any of the stages or in the full cycle of your integrated
            Talent Management process.
          </P>
          <CTAButton>Something</CTAButton>
        </TextDiv>
      </Div>{" "}
      <Div>
        <TextDiv>
          <H1>Title here</H1>
          <H4>SubTitle here</H4>
          <P>
            We are a diverse group of HR professionals that provide service and
            support to your organization’s Talent Management needs. We aim to be
            present at any of the stages or in the full cycle of your integrated
            Talent Management process.
          </P>
          <CTAButton>Something</CTAButton>
        </TextDiv>{" "}
        <Img src={img2} />
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;

const Img = styled.img`
  width: 50vw;
  height: 50vw;
  min-height: 340px;
  min-width: auto;
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
