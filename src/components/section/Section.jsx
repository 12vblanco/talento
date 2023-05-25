import React from "react";
import styled from "styled-components";
import img1 from "../../assets/img/wood.jpg";

const Section = () => {
  return (
    <>
      {" "}
      <Div>
        <Img src={img1} />
        <TextDiv>
          <h1>Title here</h1>
          <h3>SubTitle here</h3>
          <p>
            Text text etsgjkf'rjb gjotp text etsgjkf'rjb gjotp text etsgjkf'rjb
            gjotp jgpjg Text text etsgjkf'rjb gjotp text etsgjkf'rjb gjotp text
            etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg jgpjg jgpjgText text etsgjkf'rjb gjotp text
            etsgjkf'rjb gjotp text etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb
            gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp
            jgpjg text etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg jgpjg jgpjgtext etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg jgpjg jgpjg
          </p>
        </TextDiv>
      </Div>{" "}
      <Div>
        <TextDiv>
          <h1>Title here</h1>
          <h3>SubTitle here</h3>
          <p>
            Text text etsgjkf'rjb gjotp text etsgjkf'rjb gjotp text etsgjkf'rjb
            gjotp jgpjg Text text etsgjkf'rjb gjotp text etsgjkf'rjb gjotp text
            etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg jgpjg jgpjgText text etsgjkf'rjb gjotp text
            etsgjkf'rjb gjotp text etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb
            gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp
            jgpjg text etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg jgpjg jgpjgtext etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg text etsgjkf'rjb gjotp jgpjg text
            etsgjkf'rjb gjotp jgpjg jgpjg jgpjg
          </p>
        </TextDiv>{" "}
        <Img src={img1} />
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;

const Img = styled.img`
  width: 50vw;
  height: 45vw;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 48px 96px;
`;

export default Section;
