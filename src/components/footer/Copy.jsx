import React from "react";
import styled from "styled-components";

const CopyRight = () => {
  return (
    <CopyDiv>
      <H4>
        Web Victor Blanco {new Date().getFullYear()} &copy;
        <span>&nbsp;&nbsp;</span> <Terms to="#">Terms & Conditions</Terms>
      </H4>
    </CopyDiv>
  );
};

const CopyDiv = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  max-width: fit-content;
  margin: 0 auto;
  color: white;
  width: 100%;
  height: fit-content;
  background: #333;
`;

const H4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  font-size: 14px;
`;
const Terms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

export default CopyRight;
