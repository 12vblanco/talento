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
          <CardTitle>{card.title}</CardTitle>
          <CardSubTitle>{card.subTitle}</CardSubTitle>
          <CardText>{card.text}</CardText>
        </Div>
      ))}
    </>
  );
};

const Div = styled.div`
  width: 360px;
  height: 400px;
  margin-right: 11px;
  margin-left: 11px;
  margin-top: 22px;
  margin-bottom: 22px;
  border-radius: 38px;
  padding: 20px 20px 20px 30px;
  box-shadow: 4px 6px 8px rgba(3, 3, 3, 0.4);
  outline: 3px solid #393939;
  color: #fff;
  background: #333;
`;

const CardTitle = styled.h1`
  text-align: center;

  font-family: "Montserrat";
  font-size: 26px;
  font-weight: 700;
`;
const CardSubTitle = styled.h3`
  text-align: center;

  font-size: 15px;
  margin: 12px 0;
  margin-top: 4px;
`;
const CardText = styled.p`
  text-align: center;
  font-size: 16px;
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
