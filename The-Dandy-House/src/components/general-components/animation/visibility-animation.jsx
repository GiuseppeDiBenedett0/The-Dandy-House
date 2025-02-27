import { motion } from "framer-motion";
import { useRef } from "react";
import useOnScreen from "../../hooks/visibility-hook";

const VisibilityAnimation = ({
  children,
  as: Component = "div",
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  repeat = true,
  onAnimationComplete,
  variants,
  ...props
}) => {
  //Ref per rilevare se l'elemento è visibile.
  const ref = useRef(null);
  const { isVisible, hasBeenVisible } = useOnScreen(ref);

  //Determina lo stato dell'animazione basandosi sulla visibilità e sulla ripetizione.
  const animationState = repeat
    ? isVisible
      ? animate
      : initial
    : hasBeenVisible
    ? animate
    : initial;

  //Filtro delle varianti se necessarie.
  const filteredProps = { ...props };
  if (variants) {
    delete filteredProps.variants;
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animationState}
      transition={transition}
      onAnimationComplete={onAnimationComplete}
      {...filteredProps}
    >
      <Component {...filteredProps}>{children}</Component>
    </motion.div>
  );
};

export default VisibilityAnimation;
