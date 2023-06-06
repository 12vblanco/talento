import React, { useEffect } from "react";
import styled from "styled-components";
import bgImg from "../../assets/img/about1.jpg";
import ContactForm from "./ContactForm";

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Div>
      <ContactForm />
    </Div>
  );
}

const Div = styled.div`
  width: 100vw;
  height: fit-content;
  background: white;
  background-image: url(${bgImg});
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 110px;
  padding-bottom: 50px;
`;
