import styled from "styled-components";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Cardbody = styled.div`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $cardBodyItems }) => $cardBodyItems};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  max-height: 647px;
  width: 100%;
  background: ${({ $background }) => $background};
  margin-top: ${({ $marginTop }) => $marginTop};
`;

const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ $cardTextItems }) => $cardTextItems || "center"};
  text-align: ${({ $textAlign }) => $textAlign || "center"};
  max-width: 400px;
  margin: 16px 0;
  padding: 0 24px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  color: ${({ theme }) => theme.textColors.primary};
`;

const CardH2 = styled.h2`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  margin-bottom: 10px;
`;

const CardP = styled.p`
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  margin: 24px 0;
`;

const CardButton = styled.button`
  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  border-radius: 25px;
  margin: 16px 0;
  width: 112px;
`;

const CardImgContent = styled(motion.img)`
  width: ${({ $width }) => $width || "300px"};
  height: ${({ $height }) => $height || "317px"};
  margin: 8px 0;
`;

const CardsComponent = forwardRef(
  (
    {
      title,
      paragraph,
      button,
      image,
      alt,
      $justifyContent,
      $cardBodyItems,
      $flexDirection,
      $background,
      $marginTop,
      $cardTextItems,
      $textAlign,
      $width,
      $height,
      $firstCard,
    },
    ref
  ) => {
    const slayerImgAnimation = {
      hidden: { opacity: 0, x: "40%" },
      visible: { opacity: 1, x: 0 },
    };

    return (
      <Cardbody
        ref={ref}
        $justifyContent={$justifyContent}
        $cardBodyItems={$cardBodyItems}
        $flexDirection={$flexDirection}
        $marginTop={$marginTop}
        $background={$background}
      >
        <CardTextContent
          $cardTextItems={$cardTextItems}
          $textAlign={$textAlign}
        >
          <CardH2>{title}</CardH2>
          <CardP>{paragraph}</CardP>
          <CardButton>{button}</CardButton>
        </CardTextContent>
        <CardImgContent
          src={image}
          alt={alt}
          $width={$width}
          $height={$height}
          initial={$firstCard && "hidden"}
          animate={$firstCard && "visible"}
          transition={$firstCard && { duration: 1.5, ease: "easeIn" }}
          variants={$firstCard && slayerImgAnimation}
        />
      </Cardbody>
    );
  }
);

export default CardsComponent;
