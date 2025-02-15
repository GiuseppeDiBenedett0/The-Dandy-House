import styled from "styled-components";
import { motion } from "framer-motion";

const MotionTextTitle = motion.create(styled.h2.withConfig({
  shouldForwardProp: (prop) => !["animation", "variants"].includes(prop),
})`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.secondary};
  margin: 16px auto;
  text-align: center;

  @media (max-width: 1280px) {
    font-size: 1.8rem;
  }

  @media (max-width: 565px) {
    font-size: 1.6rem;
  }
`);

const MotionTextParagraph = motion.create(styled.p.withConfig({
  shouldForwardProp: (prop) => !["animation", "variants"].includes(prop),
})`
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.primary};
  margin-bottom: 12px;

  @media (max-width: 1280px) {
    font-size: 1.3rem;
  }

  @media (max-width: 565px) {
    font-size: 1rem;
  }
`);

const TextSection = ({ title, description, index, textAnimation, cardVisible }) => {
  return (
    <>
      <MotionTextTitle
        initial="hidden"
        animate={cardVisible ? "visible" : "hidden"}
        custom={index}
        variants={textAnimation}
      >
        {title}
      </MotionTextTitle>
      <MotionTextParagraph
        initial="hidden"
        animate={cardVisible ? "visible" : "hidden"}
        custom={index}
        variants={textAnimation}
      >
        {description}
      </MotionTextParagraph>
    </>
  );
};

export default TextSection;
