import React from "react";
import styled from "styled-components";
import ScrollToTop from "../../misc/ScrollToTop";
import { EventBody } from "./EventBody";

const Events = () => {
  return (
    <Div>
      <ScrollToTop />
      <EventBody />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: fit-content;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 160px;
  padding-bottom: 50px;
  min-height: calc(100vh - 200px);
`;
export default Events;
