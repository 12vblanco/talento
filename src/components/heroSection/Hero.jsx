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
      {/* <WhiteSpace>"Some quote here"</WhiteSpace> */}
    </>
  );
};
const DivContent = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 143px);
  max-height: 700px;
  margin-top: 120px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 22%;
  @media (max-width: 858px) {
    left: 8%;
  }
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
