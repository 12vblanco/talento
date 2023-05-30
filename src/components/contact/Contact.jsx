import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/img/about1.jpg";
import ContactForm from "./ContactForm";

export function Contact() {
  return (
    <Div>
      <ContactForm />
    </Div>
  );
}

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  background-image: url(${bgImg});
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 60px;
`;
