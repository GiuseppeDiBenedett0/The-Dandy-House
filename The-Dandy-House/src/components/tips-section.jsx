import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import Slayer from "../assets/196px-GGST_Slayer_jS.png";
import HoverSong from "../assets/Ups and Downs [With Lyrics] (Slayer Theme) - Guilty Gear Strive OST.mp3";

const divColorChangeStart = keyframes`
   0% {
    background-color: transparent;
  }
   100% {
    background-color: #6a0dad;
  }
`;

const divColorChange = keyframes`
  0% {
    background-color: #6a0dad;
  }
  50% {
    background-color: #8b2de4;
  }
  100% {
    background-color: #6a0dad;
  }
`;

const divColorChangeEnd = keyframes`
  0% {
    background-color: #6a0dad;
  }
  100% {
    background-color: transparent;
  }
`;

const titleColorChangeStart = keyframes`
   0% {
    color: #f13932;
  }
   100% {
    color: #f13932;
  }
`;

const titleColorChange = keyframes`
  0% {
    color: #f13932;
  }
  50% {
    color: #b10b05;
  }
  100% {
    color: #f13932;
  }
`;

const titleColorChangeEnd = keyframes`
  0% {
    color: #b10b05;
  }
  100% {
    color: #f13932;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px auto 40px auto;
  padding: 24px;
  border: 2px solid #c51400;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    animation: ${divColorChangeStart} 3s forwards,
      ${divColorChange} 10s infinite 3s;
  }

  &:not(:hover) {
    animation: ${divColorChangeEnd} 3s forwards;
  }

  &:hover h3 {
    animation: ${titleColorChangeStart} 3s forwards,
      ${titleColorChange} 10s infinite 3s;
  }

  &:not(:hover) h3 {
    animation: ${titleColorChangeEnd} 3s forwards;
  }

  @media (max-width: 625px) {
    justify-content: baseline;
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 520px;

  @media (max-width: 1085px) {
    width: 50%;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2.8rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  text-transform: uppercase;
  color: #f13932;

  @media (max-width: 770px) {
    font-size: 1.5rem;
  }
`;

const SectionParagraph = styled.p`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #e0e0e0;
  text-align: left;
  line-height: 1.7;
  margin-top: 30px;

  @media (max-width: 770px) {
    font-size: 1.3rem;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;

  @media (max-width: 1085px) {
    width: 40%;
    height: 40%;
  }

  @media (max-width: 625px) {
    margin: 40px 0 0 0;
  }
`;

function TipsSection() {
  const [audio] = useState(() => new Audio(HoverSong));
  const [isAudioEnable, setIsAudioEnable] = useState(false);

  const enableAudio = () => {
    if (!isAudioEnable) {
      setIsAudioEnable(true);
      audio.play();
    }
  };

  const handleMouseEnter = () => {
    if (isAudioEnable) {
      audio.play();
    }
  };

  const handleMouseLeave = () => {
    if (isAudioEnable) {
      audio.pause();
    }
  };

  useEffect(() => {
    const handleAudioEnd = () => {
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, [audio]);

  return (
    <>
      <Container
        onClick={enableAudio}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <TextContainer>
          <SectionTitle>Slayer daily tip</SectionTitle>
          <SectionParagraph>
            Use Pilebunker to deafet your enemies and claim the victory.
          </SectionParagraph>
        </TextContainer>
        <Image src={Slayer} alt="Slayer" />
      </Container>
    </>
  );
}

export default TipsSection;
