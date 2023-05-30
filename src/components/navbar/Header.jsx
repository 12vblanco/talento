import styled from "styled-components";
import { Container } from "../misc/Container";
import { Logo } from "./Logo";
import NavItems from "./NavItems";

// import { FiMenu, FiX } from "react-icons/fi";

function Header({ isOpen, handleToggle }) {
  return (
    <>
      <HeaderContainer>
        <Container>
          <Logo />
          <NavItems isOpen={isOpen} handleToggle={handleToggle} />
        </Container>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background: #fff;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
