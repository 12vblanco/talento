import React from "react";
import styled from "styled-components";

const CTAButton = (props) => {
  return <Div inverted={props.inverted}>{props.children}</Div>;
};

const Div = styled.button`
  background-color: ${(props) => (props.inverted ? "#fff" : "#fd8642")};
  font-family: "Montserrat";
  color: ${(props) => (props.inverted ? "#fd8642" : "#fff")};
  border: none;
  outline: 2px solid ${(props) => (props.inverted ? "#fd8642" : "transparent")};
  border-radius: 9px;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1.14rem 1.3rem 1rem 1.3rem;
  @media (max-width: 580px) {
    padding: 0.6rem 0.8rem;
  }

  &:hover {
    background-color: ${(props) => (props.inverted ? "#fd8642" : "#fff")};
    color: ${(props) => (props.inverted ? "#fff" : "#fd8642")};
  }
`;

export default CTAButton;
