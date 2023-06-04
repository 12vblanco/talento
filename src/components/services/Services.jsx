import React from "react";
import styled from "styled-components";
import Card from "../misc/Card";

const Services = () => {
  return (
    <Div id="services">
      <Row>
        <Card />
      </Row>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
  min-height: 460px;
  padding: 42px 0;
  height: fit-content;
  background: #fff;
  color: #333;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
  min-height: 460px;
  padding: 22px 0;
  height: fit-content;
  background: #fff;
`;

export default Services;
