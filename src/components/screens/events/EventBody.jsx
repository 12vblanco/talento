import React from "react";
import styled from "styled-components";
import bgImgBk from "../../../assets/img/about1.jpg";
import { AdminLogin } from "./AdminLogin";
import { EventForm } from "./EventForm";

export function EventBody() {
  return (
    <Div>
      <AdminLogin />

      <EventContainer>
        <EventForm />
      </EventContainer>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  width: 60vw;
  height: fit-content;
  background-image: url(${bgImgBk});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  padding-top: 70px;
  padding-bottom: 50px;
  border-radius: 10px;
  color: #000;
  @media (max-width: 555px) {
    max-width: 100vw;
  }
`;

const EventContainer = styled.div`
  width: 78%;
  height: fit-content;
  background: #fd8642;
  opacity: 0.85;
  border-radius: 6px;
  padding: 1rem 1.6rem;
`;
