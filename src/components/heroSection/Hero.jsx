import React from "react";
import styled from "styled-components";
import video from "../../assets/video/video.mp4";

const Hero = () => {
  return (
    <HeroDiv>
      {" "}
      <Div>
        <VideoPlay src={video} autoPlay loop muted />
        {/* <BackImg src={img1} /> */}
        <Overlay />
        <Content>
          <h2>Welcoming TalentO</h2>
          <Text>
            We envisage a nimble and adaptable partnership with HR professionals
            and people managers in curating HR architectures and building people
            capabilities. As enablers, we commit ourselves to a more pragmatist
            and personalized approach in working together with partners and
            clients.{" "}
          </Text>
        </Content>
      </Div>
    </HeroDiv>
  );
};

const HeroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 173px);
  margin-top: 170px;
  background: blue;
`;

const Div = styled.div`
  width: 100vw;
  height: calc(100vh - 173px);
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

// const BackImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

const Content = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 173px);
  margin-top: 170px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 173px);
  margin-top: 170px;
  background: rgba(0, 0, 0, 0.6);
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  max-width: 40%;
`;

export default Hero;
