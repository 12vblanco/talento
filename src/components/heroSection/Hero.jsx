import React from "react";
import styled from "styled-components";
import video from "../../assets/video/video.mp4";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <>
      <HeroDiv>
        {" "}
        <Div>
          <VideoPlay src={video} autoPlay loop muted />
          <Overlay />
          <DivContent>
            <HeroContent />
          </DivContent>
        </Div>
      </HeroDiv>

      <Quote>
        “Every person is unique, put the right people with the right capability
        to the right position to solve the right problems.” <br /> Pearl Zhu,
        Talent Master
      </Quote>
    </>
  );
};
const DivContent = styled.div`
  position: absolute;
  width: 100%;
  max-width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 22%;

  @media (max-width: 858px) {
    left: 8%;
  }
  @media (max-width: 440px) {
    left: 0%;
    padding: 22px;
  }
`;

const Quote = styled.div`
  font-family: "OpenSans", sans-serif;
  font-weight: 600;
  font-style: italic;
  /* width: 100%; */
  max-width: 560px;
  min-width: 320px;
  text-align: center;
  background: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #333;
  padding: 26px;
  @media (max-width: 440px) {
    /* max-width: 100%; */
    /* min-width: 100%; */
  }
`;

const HeroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 143px);
  max-height: 700px;
  margin-top: 140px;
`;

const Div = styled.div`
  width: 100%;
  height: calc(100vh - 143px);
  max-height: 700px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VideoPlay = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 143px);
  margin-top: 140px;
  background: rgba(0, 0, 0, 0.5);
`;

export default Hero;
