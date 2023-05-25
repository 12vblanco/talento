import React from "react";
import styled from "styled-components";
import { cardText } from "../../assets/Texts";

const Card = () => {
  return (
    <Div>
      {/* <BsFillGearFill /> */}
      <CardTitle>{cardText[0].title}</CardTitle>
      <CardSubTitle>{cardText[0].subTitle}</CardSubTitle>
      <CardText>{cardText[0].text}</CardText>
    </Div>
  );
};

const Div = styled.div`
  width: 26vw;
  min-width: 320px;
  height: 26vw;
  min-height: 340px;
  background: #fff;
  margin: 22px;
  border-radius: 50%;
  padding: 80px 30px 0px 50px;
  box-shadow: 4px 6px 8px rgba(3, 3, 3, 0.1);
  outline: 5px solid #fd8642;
  color: #333;
`;

const CardTitle = styled.h1`
  font-size: 32px;
  margin: 12px;
`;
const CardSubTitle = styled.h3`
  font-size: 20px;
  margin: 12px;
  margin-top: -8px;
`;
const CardText = styled.p`
  font-size: 17px;
  margin: 12px;
  margin-top: 24px;
`;
const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
`;

export default Card;
