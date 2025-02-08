import styled from "styled-components";
import { useParams } from "react-router-dom";
import AnimatedWrapper from "../general-components/animation/animated-wrapper";
import CardsComponent from "../home-page/cards-component";
import TipsSection from "../tips-section";
import TextSection from "../general-components/text-section";
import IntroData from "../../data/introduction-data";
import IntroCardData from "../../data/introduction-card";
import TipsData from "../../data/tips";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0 60px 0;
  width: 65%;

  @media(max-width: 991px){
    width: 100%;
  };
`;

function Introduction() {
  const { section = "Introduction" } = useParams();

  const tipData = TipsData.find(
    (data) => data.section.toLowerCase() === section.toLowerCase()
  );

  return (
    <AnimatedWrapper>
      <TextSection content={IntroData} />
      <CardContainer>
        <CardGrid>
          {IntroCardData.map((data, index) => {
            return (
              <CardsComponent
                key={index}
                title={data.title}
                paragraph={data.paragraph}
                button={data.button}
                image={data.image}
                alt={data.alt}
                $justifyContent={data.justifyContent}
                $cardBodyItems={data.cardBodyItems}
                $flexDirection={data.flexDirection}
                $background={data.background}
                $margin={data.margin}
                $maxWidth={data.maxWidth}
                $mediaContent={data.mediaContent}
                $mediaItems={data.mediaItems}
                $mediaDirection={data.mediaDirection}
                $cardTextItems={data.cardTextItems}
                $textAlign={data.textAlign}
                $mediaTextAlign={data.mediatextAlign}
                $mediaCardTextItems={data.mediaCardTextItems}
                $cardTitleColor={data.cardTitleColor}
                $cardPColor={data.cardPColor}
                $buttonBackgroundColor={data.buttonBackColor}
                $buttonTextColor={data.buttonColor}
                $buttonHover={data.buttonHoverColor}
                buttonLink={data.link}
                $width={data.imgWidth}
                $height={data.imgHeight}
                $imageMaxWidth={data.imageMaxWidth}
              />
            );
          })}
        </CardGrid>
      </CardContainer>
      {tipData && (
        <TipsSection
          audio={tipData.song}
          title={tipData.title}
          paragraph={tipData.paragraph}
          image={tipData.image}
          imageAlt={tipData.imageAlt}
          $backgroundDark={tipData.darkBackground}
          $backgroundLight={tipData.lightBackground}
          $titleDark={tipData.darkTitle}
          $titleLight={tipData.lightTitle}
        />
      )}
    </AnimatedWrapper>
  );
}

export default Introduction;
