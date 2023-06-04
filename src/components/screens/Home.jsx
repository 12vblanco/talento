import React, { useEffect } from "react";
import Hero from "../heroSection/Hero";
import Section from "../section/Section";
import Services from "../services/Services";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Section />
      <Services />
      {/* <Logos /> */}
    </>
  );
}
