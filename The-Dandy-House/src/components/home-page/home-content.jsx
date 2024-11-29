import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
import useOnScreen from "../hooks/main-card-hook";
import CardsComponent from "./cards-component";
import CardData from "../../data/home-cards";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-top: 60px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  & > :first-child {
    grid-column: span 2;
  }
`;

const MotionCard = motion(CardsComponent);

function HomeContent() {
  return (
    <>
      <GridContainer>
        {CardData.map((data, index) => {
          const ref = useRef(null);
          const isVisible = useOnScreen(ref);

          return (
            <MotionCard
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
              $marginTop={data.marginTop}
              $cardTextItems={data.cardTextItems}
              $textAlign={data.textAlign}
              $width={data.imgWidth}
              $height={data.imgHeight}
              $firstCard={index === 0}
            />
          );
        })}
      </GridContainer>
    </>
  );
}

export default HomeContent;
