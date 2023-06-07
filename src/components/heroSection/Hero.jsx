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
      <H4>
        “Every person is unique, put the right people with the right capability
        to the right position to solve the right problems.” ― Pearl Zhu, Talent
        Master
      </H4>{" "}
    </>
  );
};
const DivContent = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 143px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 22%;
  @media (max-width: 858px) {
    left: 8%;
  }
`;

const H4 = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-style: italic;
  max-width: 60%;
  text-align: center;
  background: white;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #333;
  padding: 26px;
  width: 100%;
`;

const HeroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 143px);
  max-height: 700px;
  margin-top: 140px;
`;

const Div = styled.div`
  width: 100vw;
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
  width: 100vw;
  height: calc(100vh - 143px);
  margin-top: 140px;
  background: rgba(0, 0, 0, 0.5);
`;

export default Hero;
