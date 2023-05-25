import React from "react";
import styled from "styled-components";

const Opening = () => {
  return (
    <>
      <Ul>
        <Li>Mon 12:00 - 10:00</Li>
        <Li>Tue 12:00 - 10:00</Li>
        <Li>Wed 12:00 - 10:00 </Li>
        <Li>Thu 12:00 - 10:00</Li>
        <Li>Fri 12:00 - 10:00</Li>
        <Li>Sat 12:00 - 10:00</Li>
        <Li>Sun 12:00 - 10:00 </Li>
      </Ul>
    </>
  );
};

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 0 0 0;
  padding: 0;
`;
const Li = styled.li`
  list-style: none;
  font-size: 18px;
  font-weight: 500;
`;

export default Opening;
