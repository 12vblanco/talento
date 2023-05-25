import React from "react";
import styled from "styled-components";

const CTAButton = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.button`
  background-color: #fd8642;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 9px;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1.14rem 1.3rem 1rem 1.3rem;
`;

export default CTAButton;
