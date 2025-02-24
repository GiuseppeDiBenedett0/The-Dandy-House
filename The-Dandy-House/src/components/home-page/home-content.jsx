import styled from "styled-components";
import CardsComponent from "./cards-component";
import Insertion from "./insertion-component";
import VisibilityAnimation from "../general-components/animation/visibility-animation";
import CardData from "../../data/home-cards";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-top: 60px;
  width: 100%;

  @media (min-width: 941px) {
    grid-template-columns: 1fr 1fr;

    & > :first-child {
      grid-column: span 2;
    }
  }
`;

function HomeContent() {
  return (
    <>
      <FlexContainer>
        <GridContainer>
          {/*Mappamento dei dati delle card e passaggio a VisibilityAnimation*/}
          {CardData.map((data, index) => {
            return (
              <VisibilityAnimation
                key={index}
                as={CardsComponent}
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
                buttonLink={data.link}
                $buttonBackgroundColor={data.buttonBackColor}
                $buttonTextColor={data.buttonColor}
                $buttonHover={data.buttonHoverColor}
                $width={data.imgWidth}
                $height={data.imgHeight}
                $imageMaxWidth={data.imageMaxWidth}
                $imageWidth={data.imageWidth}
                $firstCard={index === 0}
              />
            );
          })}
        </GridContainer>
        <Insertion />
      </FlexContainer>
    </>
  );
}

export default HomeContent;
