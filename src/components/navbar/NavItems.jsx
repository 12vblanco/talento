import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CTAButton from "../misc/CTABUtton";
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
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/candidates">Candidates</NavLink>
          </NavItem>
          <NavItem>
            <Link to="/contact">
              <CTAButton>{"Contact"}</CTAButton>
            </Link>{" "}
          </NavItem>
        </NavList>
      </Nav>
      <Burger handleToggle={handleToggle} isOpen={isOpen} />
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 10%;
  font-family: "Montserrat", sans-serif;
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
  cursor: pointer;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
`;
