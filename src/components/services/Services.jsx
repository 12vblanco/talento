import React from "react";
import styled from "styled-components";
import Card from "../misc/Card";

const Services = () => {
  return (
    <Div>
      <Card />
      <Card />
      <Card />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
  min-height: 460px;
  padding: 22px 0;
  height: fit-content;
  background: #f1f1f0;
`;

export default Services;
