import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
import useOnScreen from "../hooks/main-card-hook";
import CardsComponent from "./cards-component";
import Insertion from "./insertion-component";
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

const MotionCard = motion.create(CardsComponent);

function HomeContent() {
  return (
    <>
      <FlexContainer>
        <GridContainer>
          {CardData.map((data, index) => {
            const ref = useRef(null);
            const isVisible = useOnScreen(ref);

            return (
              <MotionCard
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5 }}
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
