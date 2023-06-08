import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/img/about1.jpg";
import ScrollToTop from "../misc/ScrollToTop";
import ContactForm from "./ContactForm";

export function Contact() {
  return (
    <Div>
      <ScrollToTop />

      <ContactForm />
    </Div>
  );
}

const Div = styled.div`
  width: 100vw;
  height: fit-content;
  background: white;
  background-image: url(${bgImg});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 110px;
  padding-bottom: 50px;
`;
