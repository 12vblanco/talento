import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";

export function Contact() {
  return (
    <Div>
      {/* <Text>
        <p></p>
      </Text> */}
      <ContactForm />
    </Div>
  );
}

const Div = styled.div`
  width: 100vw;
  background: white;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 50px;
`;

const Img = styled.img`
  width: 300px;
  height: auto;
`;

const Text = styled.div`
  width: 200px;
  height: 100%;
  font-family: "Roboto";
  color: #333;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
