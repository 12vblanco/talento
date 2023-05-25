import React from "react";
import styled from "styled-components";
export function Container(props) {
  return <Div>{props.children}</Div>;
}

const Div = styled.div`
  width: 1240px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
