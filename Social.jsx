import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/Bs";
import styled from "styled-components";

export function Social({}) {
  return (
    <SocialList>
      <SocialItem>
        <SocialLink href="#">
          <BsFacebook />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="#">
          <BsTwitter />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="#">
          <BsInstagram />
        </SocialLink>
      </SocialItem>
    </SocialList>
  );
}

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const SocialItem = styled.li`
  margin: 0.8rem;
`;

const SocialLink = styled.a`
  color: #333;
  font-size: 1.5rem;
  font-size: 34px;
`;
