import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Contact } from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/navbar/Header";
import { Candidates } from "./components/screens/Candidates";
import { Home } from "./components/screens/Home";
import { Terms } from "./components/screens/Terms";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function App() {
  useEffect(() => {
    scrollToTop();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CookieConsent
        containerClasses="cookie_container"
        style={{
          background: "rgba(2, 60, 113, 0.9)",
          fontWeight: "500",
          height: "10vh",
          alignItems: "center",
          fontSize: "18px",
        }}
        buttonStyle={{
          borderRadius: "50px",
          padding: "20px 32px",
          fontSize: "18px",
          fontWeight: "700",
          background: "white",
          color: "rgb(2, 60, 113)",
        }}
        contentStyle={{ textAlign: "left", marginBottom: "12px" }}
      >
        This website uses cookies and third party software to monitor traffic
        anonymously and improve user experience. For more info read my{" "}
        <Span>
          <a href="/terms" aria-label="Visit Victor Blanco's Terms Page">
            terms & conditions
          </a>
        </Span>
      </CookieConsent>

      <Header handleToggle={handleToggle} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/terms" element={<Terms scrollToTop={scrollToTop} />} />
      </Routes>
      <Footer scrollToTop={scrollToTop} />
    </>
  );
}

const Span = styled.span`
  a {
    color: white;
    text-decoration: underline;
  }
`;

export default App;
