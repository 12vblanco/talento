import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/Bs";
import styled from "styled-components";

export function Social({ backgroundColor }) {
  return (
    <SocialList>
      <SocialItem>
        <SocialLink
          href="https://www.facebook.com/profile.php?id=100092175527994"
          target="_blank"
          rel="noopener noreferrer"
          color={backgroundColor === "#333" ? "#fff" : "#333"}
        >
          <BsFacebook />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://www.linkedin.com/in/bespoke-talento-07390a279/
"
          target="_blank"
          rel="noopener noreferrer"
          color={backgroundColor === "#333" ? "#fff" : "#333"}
        >
          <BsLinkedin />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://twitter.com/Bespoke_TalentO
"
          target="_blank"
          rel="noopener noreferrer"
          color={backgroundColor === "#333" ? "#fff" : "#333"}
        >
          <BsTwitter />
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
  color: ${(props) => props.color};
  font-size: 34px;
  margin: 0 12px;
`;
