import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CTAButton from "../misc/CTABUtton";
import Burger from "./Burger";

const NavItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/#about" },
    { label: "Services", link: "/#services" },
    { label: "Contact", link: "/contact", isCTA: true },
  ];

  return (
    <>
      <Nav>
        <NavList>
          {navItems.map((item, index) =>
            item.isCTA ? (
              <Link key={index} to="/contact">
                <CTAButton>{"Contact"}</CTAButton>
              </Link>
            ) : (
              <NavItem key={index}>
                <NavLink href={item.link}>{item.label}</NavLink>
              </NavItem>
            )
          )}
        </NavList>
      </Nav>
      <Burger handleToggle={handleToggle} isOpen={isOpen} navItems={navItems} />
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 10%;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 899px) {
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
  font-size: 18px;
`;

const Button = styled(CTAButton)`
  margin-top: -22px !important;
`;

export default NavItems;
