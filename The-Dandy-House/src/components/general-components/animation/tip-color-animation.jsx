import styled, { css } from "styled-components";

const backgroundColorAnimation = ($backgroundDark, $backgroundLight) => css`
  @keyframes divColorChangeStart {
    0% {
      background-color: transparent;
    }
    100% {
      background-color: ${$backgroundDark};
    }
  }

  @keyframes divColorChange {
    0% {
      background-color: ${$backgroundDark};
    }
    50% {
      background-color: ${$backgroundLight};
    }
    100% {
      background-color: ${$backgroundDark};
    }
  }
`;

const titleColorAnimation = ($titleDark, $titleLight) => css`
  @keyframes titleColorChangeStart {
    0% {
      color: ${$titleLight};
    }
    100% {
      color: ${$titleLight};
    }
  }

  @keyframes titleColorChange {
    0% {
      color: ${$titleLight};
    }
    50% {
      color: ${$titleDark};
    }
    100% {
      color: ${$titleLight};
    }
  }
`;

const hoverAnimations = css`
  &:hover {
    animation: divColorChangeStart 3s forwards, divColorChange 10s infinite 3s;
  }

  &:hover h3 {
    animation: titleColorChangeStart 3s forwards,
      titleColorChange 10s infinite 3s;
  }
`;

export default {
  backgroundColorAnimation,
  titleColorAnimation,
  hoverAnimations,
};
