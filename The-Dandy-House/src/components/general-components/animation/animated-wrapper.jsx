import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 85%;
  max-width: 1700px;
  margin: 132px auto 40px auto;
  display: ${({ $display }) => $display};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};

  @media (max-width: 450px) {
    width: 90%;
  }
`;

function AnimatedWrapper({
  children,
  $display,
  $flexDirection,
  $alignItems,
  $justifyContent,
}) {
  //Varianti di animazione per il wrapper.
  const pageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Wrapper
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 1, ease: "easeIn" }}
        variants={pageAnimation}
        $display={$display}
        $flexDirection={$flexDirection}
        $alignItems={$alignItems}
        $justifyContent={$justifyContent}
      >
        {children}
      </Wrapper>
    </>
  );
}

export default AnimatedWrapper;
