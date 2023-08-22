import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export function EventForm({ series, title, date, link }) {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const eventRef = ref(db, "events");

    const unsubscribe = onValue(eventRef, (snapshot) => {
      setEventData(snapshot.val());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Series>{eventData ? eventData.series : series}</Series>
      <Title>{eventData ? eventData.title : title}</Title>
      <Date>{eventData ? eventData.date : date}</Date>
      <LinkStyled
        href={eventData ? eventData.link : link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Link
      </LinkStyled>
    </>
  );
}

const Series = styled.h1`
  font-family: "Hurricane-Regular";
  text-transform: capitalize;
  font-size: 38px;
`;
const Title = styled.h2`
  font-family: "Montserrat";
  text-transform: uppercase;
  font-size: 42px;
  font-weight: 900;
  @media (max-width: 599px) {
    font-size: 28px;
  }
`;
const Date = styled.p`
  font-weight: 700;
`;
const LinkStyled = styled.a`
  cursor: pointer;
  color: blue;
  &:hover {
    color: white;
  }
`;
