import { useState } from "react";
import CookieConsent from "react-cookie-consent";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/misc/ScrollToTop";
import Header from "./components/navbar/Header";
import { Home } from "./components/screens/Home";
import Terms from "./components/screens/Terms";
import { Contact } from "./components/screens/contact/Contact";
import Success from "./components/screens/contact/Success";
import Events from "./components/screens/events/Events";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CookieConsent
        containerClasses="cookie_container"
        style={{
          fontFamily: "Montserrat",
          background: "rgba(51, 51, 51,.9)",
          fontWeight: "500",
          height: "fit-content",
          alignItems: "center",
          fontSize: "17px",
        }}
        buttonStyle={{
          borderRadius: "50px",
          padding: "20px 32px",
          fontSize: "18px",
          fontWeight: "700",
          background: "white",
          color: "rgb(2, 60, 113)",
        }}
        contentStyle={{ textAlign: "left", marginBottom: "18px" }}
      >
        This website uses cookies and third party software to monitor traffic
        anonymously and improve user experience. For more info read my{" "}
        <Span>
          <a href="/terms" aria-label="Terms Page">
            terms & conditions
          </a>
        </Span>
      </CookieConsent>

      <Header handleToggle={handleToggle} isOpen={isOpen} />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="#about" element={<Home />} /> */}
        <Route path="/events" element={<Events />} />
        <Route path="#services" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
      <Footer />
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
