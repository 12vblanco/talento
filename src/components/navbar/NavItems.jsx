import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

export function NavItems({ isOpen, handleToggle }) {
  return (
    <>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Link1</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/bio">Link2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/bio">Link3</NavLink>
          </NavItem>
          <NavItem>
            <CTAButton>Contact</CTAButton>
          </NavItem>
        </NavList>
        {/* <Social /> */}
      </Nav>
      <Burger handleToggle={handleToggle} isOpen={isOpen} />
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 760px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
`;

const CTAButton = styled.button`
  background-color: #fd8642;
  color: #fff;
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
`;
