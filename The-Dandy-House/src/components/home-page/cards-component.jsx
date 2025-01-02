import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Cardbody = styled.div`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $cardBodyItems }) => $cardBodyItems};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  height: 100%;
  width: 100%;
  background: ${({ $background }) => $background};
  margin: ${({ $margin }) => $margin};

  @media (max-width: ${({ $maxWidth }) => $maxWidth}) {
    justify-content: ${({ $mediaContent }) => $mediaContent};
    align-items: ${({ $mediaItems }) => $mediaItems};
    flex-direction: ${({ $mediaDirection }) => $mediaDirection};
  }
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

  @media (max-width: 940px) {
    text-align: ${({ $mediaTextAlign }) => $mediaTextAlign};
    align-items: ${({ $mediaCardTextItems }) => $mediaCardTextItems};
  }
`;

const CardH2 = styled.h2`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  margin-bottom: 10px;
  color: ${({ $cardTitleColor }) => $cardTitleColor || "#FFFFFF"};

  @media (max-width: 445px) {
    font-size: 2rem;
  }
`;

const CardP = styled.p`
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  margin: 24px 0;
  color: ${({ $cardPColor }) => $cardPColor || "#FFFFFF"};

  @media (max-width: 445px) {
    font-size: 1rem;
  }
`;

const CardButton = styled.button`
  border-radius: 25px;
  margin: 16px 0;
  width: 112px;
  background-color: ${({ $buttonBackgroundColor }) =>
    $buttonBackgroundColor || "#FFFFFF"};
  color: ${({ $buttonTextColor }) => $buttonTextColor || "#000000"};

  &:active,
  &:focus,
  &:visited,
  &:hover {
    border-color: transparent;
    background-color: ${({ $buttonHover }) => $buttonHover || "#bfbfbf"};
  }

  @media (max-width: 445px) {
    font-size: 0.9rem;
    width: 90px;
  }
`;

const CardLink = styled.a`
  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  text-decoration: none;

  &:active,
  &:focus,
  &:visited,
  &:hover {
    color: ${({ $buttonTextColor }) => $buttonTextColor || "#000000"};
  }

  @media (max-width: 445px) {
    font-size: 0.9rem;
  }
`;

const CardImgContent = styled(motion.img)`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  margin: 8px 0;

  @media (max-width: ${({ $imageMaxWidth }) => $imageMaxWidth}) {
    width: ${({ $imageWidth }) => $imageWidth};
  }
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
      $margin,
      $maxWidth,
      $mediaContent,
      $mediaItems,
      $mediaDirection,
      $cardTextItems,
      $textAlign,
      $mediaTextAlign,
      $mediaCardTextItems,
      $cardTitleColor,
      $cardPColor,
      $buttonBackgroundColor,
      $buttonTextColor,
      $buttonHover,
      buttonLink,
      $width,
      $height,
      $imageMaxWidth,
      $imageWidth,
      $firstCard,
    },
    ref
  ) => {
    const firstCardAnimation = {
      hidden: { opacity: 0, x: "15%" },
      visible: { opacity: 1, x: 0 },
    };

    return (
      <Cardbody
        ref={ref}
        $justifyContent={$justifyContent}
        $cardBodyItems={$cardBodyItems}
        $flexDirection={$flexDirection}
        $margin={$margin}
        $background={$background}
        $maxWidth={$maxWidth}
        $mediaContent={$mediaContent}
        $mediaItems={$mediaItems}
        $mediaDirection={$mediaDirection}
      >
        <CardTextContent
          $cardTextItems={$cardTextItems}
          $textAlign={$textAlign}
          $mediaTextAlign={$mediaTextAlign}
          $mediaCardTextItems={$mediaCardTextItems}
        >
          <CardH2 $cardTitleColor={$cardTitleColor}>{title}</CardH2>
          <CardP $cardPColor={$cardPColor}>{paragraph}</CardP>
          <CardLink href={buttonLink}>
            <CardButton
              $buttonBackgroundColor={$buttonBackgroundColor}
              $buttonTextColor={$buttonTextColor}
              $buttonHover={$buttonHover}
            >
              {button}
            </CardButton>
          </CardLink>
        </CardTextContent>
        <CardImgContent
          src={image}
          alt={alt}
          $width={$width}
          $height={$height}
          $imageMaxWidth={$imageMaxWidth}
          $imageWidth={$imageWidth}
          initial={$firstCard && "hidden"}
          animate={$firstCard && "visible"}
          transition={$firstCard && { duration: 1.5, ease: "easeIn" }}
          variants={$firstCard && firstCardAnimation}
        />
      </Cardbody>
    );
  }
);

export default CardsComponent;
