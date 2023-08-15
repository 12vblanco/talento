import React from "react";
import styled from "styled-components";
import { cardText } from "../../assets/Texts";

const Card = () => {
  return (
    <>
      {cardText.map((card) => (
        <Div key={card.id}>
          <CardIcon>
            <card.icon size={84} color="#fd8642" />
          </CardIcon>
          <Column>
            <CardTitle>{card.title}</CardTitle>
            <CardSubTitle>{card.subTitle}</CardSubTitle>
            <CardText>{card.text}</CardText>
          </Column>
        </Div>
      ))}
    </>
  );
};

const Div = styled.div`
  width: 360px;
  height: fit-content;
  min-height: 440px;
  margin-right: 11px;
  margin-left: 11px;
  margin-top: 22px;
  margin-bottom: 22px;
  border-radius: 38px;
  background: #333;
  padding: 20px 20px 20px 30px;
  box-shadow: 4px 6px 8px rgba(3, 3, 3, 0.4);
  outline: 3px solid #393939;
  color: #fff;
  background: #333;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 3.75em 5em -1.875em rgba(0, 0, 0, 0.4);
    background: #4d4d4d;
    outline: 1px solid #4d4d4d;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.h1`
  font-family: "Montserrat";
  font-size: 22px;
  font-weight: 700;
`;
const CardSubTitle = styled.h3`
  font-size: 16px;
  margin: 0px 0;
  margin-top: 4px;
`;
const CardText = styled.p`
  font-size: 17px;
  margin-top: 12px;
`;
const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  margin-bottom: 12px;
`;

export default Card;
