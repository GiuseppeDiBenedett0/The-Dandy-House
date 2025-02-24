import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import animations from "../components/general-components/animation/tip-color-animation";

const { backgroundColorAnimation, titleColorAnimation, hoverAnimations } =
  animations;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px auto 40px auto;
  padding: 24px;
  border: 2px solid #c51400;
  background-color: transparent;
  cursor: pointer;

  ${({ $backgroundDark, $backgroundLight }) =>
    backgroundColorAnimation($backgroundDark, $backgroundLight)}

  ${({ $titleDark, $titleLight }) =>
    titleColorAnimation($titleDark, $titleLight)}

  ${hoverAnimations}

  @media (max-width: 625px) {
    justify-content: baseline;
    flex-direction: column;
    align-items: center;
    padding: 8px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 520px;

  @media (max-width: 1085px) {
    width: 70%;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2.8rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  text-transform: uppercase;
  color: #f13932;

  @media (max-width: 770px) {
    font-size: 1.6rem;
  }
`;

const SectionParagraph = styled.p`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #e0e0e0;
  text-align: left;
  line-height: 1.7;
  margin-top: 30px;

  @media (max-width: 625px) {
    font-size: 1.3rem;
    margin-top: 16px;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;

  @media (max-width: 1085px) {
    width: 50%;
    height: 50%;
  }

  @media (max-width: 625px) {
    margin: 16px 0 0 0;
  }
`;

function TipsSection({
  audio,
  index,
  title,
  paragraph,
  image,
  imageAlt,
  $backgroundDark,
  $backgroundLight,
  $titleDark,
  $titleLight,
}) {
  const [audioElement, setAudioElement] = useState(null);
  const [isAudioEnable, setIsAudioEnable] = useState(false);
  const location = useLocation();

  const enableAudio = () => {
    if (!isAudioEnable && audioElement) {
      setIsAudioEnable(true);
      audioElement.play();
    }
  };

  const handleMouseEnter = () => {
    if (isAudioEnable && audioElement) {
      audioElement.play();
    }
  };

  const handleMouseLeave = () => {
    if (isAudioEnable && audioElement) {
      audioElement.pause();
    }
  };

  useEffect(() => {
    const newAudioElement = new Audio(audio);
    setAudioElement(newAudioElement);

    const handleAudioEnd = () => {
      newAudioElement.currentTime = 0;
      newAudioElement.play();
    };

    newAudioElement.addEventListener("ended", handleAudioEnd);

    return () => {
      newAudioElement.pause();
      newAudioElement.currentTime = 0;
      newAudioElement.removeEventListener("ended", handleAudioEnd);
    };
  }, [audio]);

  useEffect(() => {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      setIsAudioEnable(false);
    }
  }, [location.pathname, audioElement]);

  return (
    <>
      <Container
        key={index}
        onClick={enableAudio}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        $backgroundDark={$backgroundDark}
        $backgroundLight={$backgroundLight}
        $titleDark={$titleDark}
        $titleLight={$titleLight}
      >
        <TextContainer>
          <SectionTitle>{title}</SectionTitle>
          <SectionParagraph>{paragraph}</SectionParagraph>
        </TextContainer>
        <Image src={image} alt={imageAlt} />
      </Container>
    </>
  );
}

export default TipsSection;
