import React from "react";
import styled from "styled-components";
import CTAButton from "../misc/CTABUtton";

function Success() {
  const handleBackHome = () => {
    window.location.href = "/";
  };
  return (
    <Div>
      <h1>Hi TalentO partner!! Thank you for submitting the form!</h1>
      <Text>
        We are thrilled to have you show interest in Talento. We will get back
        to you in no time. Wishing you an amazing day ahead! Talento Team
      </Text>
      <CTAButton onClick={handleBackHome} tagName={"Go Back!"} />{" "}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  border-bottom: solid 1px #000;
  border-right: solid 1px #000;
`;

const Text = styled.p`
  margin-bottom: 44px;
`;

export default Success;
