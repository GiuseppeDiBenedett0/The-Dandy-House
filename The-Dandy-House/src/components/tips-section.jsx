import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px auto 40px auto;
  padding: 24px;
  border: 2px solid #c51400;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  cursor: pointer;

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
  color: ${({ $titleColor }) => $titleColor};
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
  $backgroundColor,
  $titleColor,
}) {
  //Stato per l'elemento audio.
  const [audioElement, setAudioElement] = useState(null);
  //Stato per abilitare l'audio.
  const [isAudioEnable, setIsAudioEnable] = useState(false);
  //Ottieni la location corrente dalla route.
  const location = useLocation();

  //Funzione per abilitare e riprodurre l'audio al clic.
  const enableAudio = () => {
    if (!isAudioEnable && audioElement) {
      setIsAudioEnable(true);
      audioElement.play();
    }
  };

  //Funzione per riprodurre l'audio al passaggio del mouse.
  const handleMouseEnter = () => {
    if (isAudioEnable && audioElement) {
      audioElement.play();
    }
  };

  //Funzione per mettere in pausa l'audio al termine del passaggio del mouse.
  const handleMouseLeave = () => {
    if (isAudioEnable && audioElement) {
      audioElement.pause();
    }
  };

  //useEffect per caricare l'elemento audio e gestire il loop dell'audio.
  useEffect(() => {
    const newAudioElement = new Audio(audio);
    setAudioElement(newAudioElement);

    //Funzione per riprodurre l'audio in loop.
    const handleAudioEnd = () => {
      newAudioElement.currentTime = 0;
      newAudioElement.play();
    };

    newAudioElement.addEventListener("ended", handleAudioEnd);

    return () => {
      newAudioElement.pause(); //Ferma l'audio quando il componente viene smontato.
      newAudioElement.currentTime = 0;
      newAudioElement.removeEventListener("ended", handleAudioEnd); //Rimuovie l'evento 'ended'.
    };
  }, [audio]);

  //useEffect per fermare l'audio quando la pagina cambia.
  useEffect(() => {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      setIsAudioEnable(false);
    }
  }, [location.pathname, audioElement]);

  return (
    <Container
      key={index}
      onClick={enableAudio}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      $backgroundColor={$backgroundColor}
      $titleColor={$titleColor}
    >
      <TextContainer>
        <SectionTitle>{title}</SectionTitle>
        <SectionParagraph>{paragraph}</SectionParagraph>
      </TextContainer>
      <Image src={image} alt={imageAlt} />
    </Container>
  );
}

export default TipsSection;
