import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ScrollToTop from "../misc/ScrollToTop";

const CopyRight = () => {
  return (
    <CopyDiv>
      <H4>
        <A
          href="https://victorblancoweb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Victor Blanco {new Date().getFullYear()} &copy; {"  "}
          {"  "}
        </A>
        <Link to="/terms" onClick={ScrollToTop}>
          Terms & Conditions
        </Link>
      </H4>
    </CopyDiv>
  );
};

const CopyDiv = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: flex;
  max-width: fit-content;
  margin: 0 auto;
`;

const H4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 13px;

  a {
    color: white;
  }
`;
const Terms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-left: 4px;
`;

const A = styled.a`
  margin-right: 4px;
`;

export default CopyRight;
