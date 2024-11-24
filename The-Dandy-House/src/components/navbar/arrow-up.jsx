import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import arrowUp from "../../assets/keyboard_arrow_up_24dp_C51400_FILL0_wght400_GRAD0_opsz24.svg";

const ArrowUpButton = styled(motion.div)`
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 10;
`;

const ArrowHref = styled.a`
  display: flex;
  justify-content: center;
  left: 0;
  bottom: 0;
  width: 150px;
  background-color: ${({ theme }) => theme.colors.primaryButtons.background};
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

  &:hover{
    background-color:  ${({ theme }) => theme.colors.primaryButtons.hover.hoverBackground};
  }

  @media (max-width: 600px) {
    width: 100px;
  }

  @media (max-width: 490px) {
    width: 70px;
  }
`;

const ArrowImg = styled.img`
  width: 65px;
  height: auto;

  @media (max-width: 600px) {
    width: 45px;
  }

  @media (max-width: 490px) {
    width: 40px;
  }
`;

function ArrowUp() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 300);
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const arrowVariants = {
    hidden: { opacity: 0, transform: "translateX(-50%) translateY(50px)" },
    visible: { opacity: 1, transform: "translateX(-50%) translateY(0)" },
    exit: { opacity: 0, transform: "translateX(-50%) translateY(50px)" },
  };
  

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <ArrowUpButton
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={arrowVariants}
            transition={{ duration: 0.3 }}
          >
            <ArrowHref href="/" onClick={handleClick}>
              <ArrowImg src={arrowUp} alt="arrowUp" />
            </ArrowHref>
          </ArrowUpButton>
        )}
      </AnimatePresence>
    </>
  );
}

export default ArrowUp;
