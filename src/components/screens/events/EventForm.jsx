import React from "react";
import styled from "styled-components";

export function EventForm() {
  return (
    <>
      <Series>Talento Breakfast Series</Series>
      <Title>Developing Job Description</Title>
      <Date>15th July 2023 / Saturday / 9-10am</Date>
      <Link>Link to google forms</Link>
    </>
  );
}

const Series = styled.h1`
  font-family: "Hurricane-Regular";
  font-size: 36px;
`;
const Title = styled.h2`
  font-family: "Montserrat";
  font-size: 46px;
  font-weight: 900;
`;
const Date = styled.p``;
const Link = styled.p``;
