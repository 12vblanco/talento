import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Burger = ({ handleToggle, isOpen }) => {
  const handleHomeClick = () => {
    handleToggle();
    window.location.href = "/home";
  };
  const handleContactClick = () => {
    handleToggle();
    window.location.href = "/contact";
  };
  const handleAboutClick = () => {
    handleToggle();
    window.location.href = "/home#about";
  };
  const handleServicesClick = () => {
    handleToggle();
    window.location.href = "/home#services";
  };
  const handleBlankClick = () => {
    handleToggle();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Contact", link: "/contact", isCTA: true },
  ];

  return (
    <>
      <BurgerIcon className={isOpen ? "open" : "closed"} onClick={handleToggle}>
        <BurgerIconLines className={isOpen ? "open line-1" : "closed line1"} />
        <BurgerIconLines className={isOpen ? "open line-2" : "closed line2"} />
        <BurgerIconLines className={isOpen ? "open line-3" : "closed line3"} />
      </BurgerIcon>
      <OverlayMenu isOpen={isOpen}>
        <MenuList>
          <MenuItem onClick={handleHomeClick}>Home</MenuItem>
          <MenuItem onClick={handleAboutClick}>About</MenuItem>
          <MenuItem onClick={handleServicesClick}>Services</MenuItem>
          <MenuItem onClick={handleContactClick}>Contact</MenuItem>
          <LinkDiv>
            {" "}
            <MenuLink onClick={handleBlankClick}>
              {" "}
              <a
                href="https://www.facebook.com/profile.php?id=100092175527994"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />{" "}
              </a>
            </MenuLink>
            <MenuLink onClick={handleBlankClick}>
              {" "}
              <a
                href="https://www.linkedin.com/in/bespoke-talento-07390a279/
              "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
            </MenuLink>
          </LinkDiv>
          <LinkDiv>
            <MenuLink onClick={handleBlankClick}>
              {" "}
              <a
                href="https://twitter.com/Bespoke_TalentO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />{" "}
              </a>
            </MenuLink>
            <MenuLink onClick={handleBlankClick}>
              {" "}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
            </MenuLink>
          </LinkDiv>
        </MenuList>
      </OverlayMenu>
    </>
  );
};

const BurgerIcon = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  margin-right: 10%;

  cursor: pointer;
  margin-top: 3px;

  &.open .line-1 {
    position: absolute;
    top: 16px;
    left: 10px;
    transform: rotate(45deg) translate(2px, 4px);
  }

  &.open .line-2 {
    position: absolute;
    left: 9.6px;
    top: 27px;
    transform: rotate(-45deg) translate(5px, -5px);
  }

  &.open .line-3 {
    background: transparent;
    transform: translateX(-70px);
  }

  &.closed .line1 {
    position: absolute;
    top: 13px;
    border-radius: 30% 30% 0 0;
    height: 6px;
  }
  &.closed .line2 {
    position: absolute;
    top: 29px;
    border-radius: 0 0 22% 22%;
    height: 6px;
  }
  &.closed .line3 {
    background: #000;
  }

  @media (min-width: 899px) {
    display: none;
  }
`;

const BurgerIconLines = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 5px;
  width: 30px;
  background-color: #000;
  transition: all 0.3s ease-in-out;

  &::before,
  &::after,
  &::nth-child(3) {
    content: "";
    position: absolute;
    height: 4px;
    width: 30px;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    top: -9px;
    left: 0;
    border-radius: 50% 50% 0 0;
    transform: ${(props) =>
      props.isOpen
        ? "rotate(-45deg) translate(4px, -4px)"
        : "rotate(45deg) translate(-4px, 4px)"};
  }

  &::after {
    top: 7.6px;
    left: 0;
    border-radius: 0 0 50% 50%;
    transform: rotate(45deg) translate(4px, 4px);
  }

  &:nth-child(3) {
    top: 21.2px;
    left: 9;
    height: 3.6px;
    transform-origin: center;
  }
`;

const OverlayMenu = styled.div`
  position: fixed;
  margin-top: 140px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0px)" : "translateX(100%)"};

  @media (max-width: 600px) {
  }
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -180px;
`;

const LinkDiv = styled.div`
  display: flex;
  margin-top: 14px;
`;

const MenuItem = styled(Link)`
  font-size: 30px;
  letter-spacing: -2.8px;
  margin: 15px;
  color: #333;
  transition: all 0.5 linear;
`;
const MenuLink = styled.div`
  margin: 8px;
  color: #333;
  transition: all 0.5 linear;

  a {
    font-size: 30px;
    letter-spacing: -1.7px;
    margin: 18px;
    color: #333;
    transition: all 0.5 linear;
    @media (max-width: 600px) {
      font-size: 26px;
    }
    @media (max-width: 380px) {
      font-size: 26px;
    }
    &:hover {
      color: #fd8642;
    }
  }

  &:hover {
    color: #fd8642;
  }
`;

// const CustomLink = styled(Link)`
//   color: inherit;
//   text-decoration: none;
// `;

export default Burger;
