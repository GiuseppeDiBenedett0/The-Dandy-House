import styled from "styled-components";
import VisibilityAnimation from "./visibility-animation";
import TextSection from "./staff-card-text";
import { useCallback, useState } from "react";

const Card = styled.div`
  display: flex;
  background-color: #232323;
  border-radius: 8px;
  width: 100%;
  height: 800px;
  align-items: center;
  justify-content: space-around;
  margin: 32px auto;

  @media (max-width: 991px) {
    flex-direction: column;
    height: 100%;
  }
`;

const CardImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  margin: auto 24px auto 24px;
`;

const CardImgTitle = styled.h1`
  font-size: 2.8rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.secondary};
  text-transform: uppercase;
  margin: 12px auto;

  @media (max-width: 1280px) {
    font-size: 2.5rem;
  }

  @media (max-width: 565px) {
    font-size: 2rem;
  }
`;

const CardImg = styled.img`
  width: 432px;
  height: 700px;

  @media (max-width: 991px) {
    width: 100%;
    height: 580px;
  }

  @media (max-width: 565px) {
    width: 75%;
    height: 75%;
  }
`;

const SeparatorContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 75px;
  background-color: #1c1c1c;

  @media (max-width: 991px) {
    width: 100%;
    height: 75px;
    justify-content: unset;
    align-items: center;
  }
`;

const SeparatorLine = styled.div`
  width: 1px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.textColors.secondary};

  @media (max-width: 991px) {
    width: 100%;
    height: 1px;
  }
`;

const CardTextContainer = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: justify;
  margin: auto 24px auto 24px;

  @media (max-width: 991px) {
    width: 90%;
  }
`;

function StaffCard({ cardData }) {
  const cardAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.6, duration: 1.2, ease: "easeOut" },
    }),
  };

  return (
    <>
      {cardData.map((data, id) => {
        const [cardVisible, setCardVisible] = useState(false);
        const handleCardComplete = useCallback(() => setCardVisible(true), []);

        return (
          <VisibilityAnimation
            key={id}
            as={Card}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 2, ease: "easeOut" }}
            variants={cardAnimation}
            repeat={false}
            onAnimationComplete={handleCardComplete} //Attivazione dell'animazione del testo.
          >
            <CardImgContainer>
              <CardImgTitle>{data.coach}</CardImgTitle>
              <CardImg src={data.image} alt={data.alt} />
            </CardImgContainer>
            <SeparatorContainer>
              <SeparatorLine />
            </SeparatorContainer>
            <CardTextContainer>
            {/*Creazione dinamica delle sezioni testuali*/}
              {[
                {
                  title: data.titleSection,
                  description: data.titleSectionDescription,
                },
                {
                  title: data.roleSectionTitle,
                  description: data.roleSectionDescription,
                },
                {
                  title: data.aboutSectionTitle,
                  description: data.aboutSectionDescription,
                },
              ].map((section, i) => (
                <TextSection
                  key={i}
                  title={section.title}
                  description={section.description}
                  index={i}
                  textAnimation={textAnimation}
                  cardVisible={cardVisible} //Attiva l'animazione quando la card è visible.
                />
              ))}
            </CardTextContainer>
          </VisibilityAnimation>
        );
      })}
    </>
  );
}

export default StaffCard;
