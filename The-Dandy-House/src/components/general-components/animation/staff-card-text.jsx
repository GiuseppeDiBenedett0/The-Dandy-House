import styled from "styled-components";
import { motion } from "framer-motion";

//Creazione di un componente styled-motion dinamico.
const createMotionText = (Tag) => styled(motion[Tag])`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: ${({ $size }) => $size};
  color: ${({ $color, theme }) => $color || theme.textColors.primary};
  margin: ${({ $margin }) => $margin || "0"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};

  @media (max-width: 1280px) {
    font-size: ${({ $size }) => `calc(${$size} - 0.2rem)`};
  }

  @media (max-width: 565px) {
    font-size: ${({ $size }) => `calc(${$size} - 0.4rem)`};
  }
`;

//Creazione dei componenti dinamici utilizzando createMotionText.
const MotionTextTitle = createMotionText("h2");
const MotionTextParagraph = createMotionText("p");


const TextSection = ({
  title,
  description,
  index,
  textAnimation,
  cardVisible,
}) => {
  return (
    <>
      <MotionTextTitle
        initial="hidden"
        animate={cardVisible ? "visible" : "hidden"}
        custom={index}
        variants={textAnimation}
        $size="2rem"
        $color={({ theme }) => theme.textColors.secondary}
        $margin="16px auto"
        $textAlign="center"
      >
        {title}
      </MotionTextTitle>
      <MotionTextParagraph
        initial="hidden"
        animate={cardVisible ? "visible" : "hidden"}
        custom={index}
        variants={textAnimation}
        $size="1.4rem"
        $color={({ theme }) => theme.textColors.primary}
        $margin="12px auto"
        $textAlign="center"
      >
        {description}
      </MotionTextParagraph>
    </>
  );
};

export default TextSection;
