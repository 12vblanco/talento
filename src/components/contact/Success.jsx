import React from "react";
import styled from "styled-components";
import CTAButton from "../misc/CTABUtton";

function Success() {
  const handleBackHome = () => {
    window.location.href = "/";
  };
  return (
    <Div>
      <H1>Hi TalentO partner!! Thank you for submitting the form!</H1>
      <Text>
        We are thrilled to have you show interest in Talento. <br />
        We will get back to you in no time. <br />
        Wishing you an amazing day ahead! <br />
        Talento Team
      </Text>
      <CTAButton onClick={handleBackHome}> {"Go Back"}</CTAButton>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

const H1 = styled.h2`
  font-family: "Montserrat";
  margin-top: 184px;
  margin-bottom: 4px;
  color: #333;
  max-width: 80%;
`;
const Text = styled.p`
  font-family: "Montserrat";
  margin-bottom: 44px;
  color: #333;
  max-width: 80%;
`;

export default Success;
