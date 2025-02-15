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
  ...props
}) => {
  const ref = useRef(null);
  const { isVisible, hasBeenVisible } = useOnScreen(ref);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={
        repeat
          ? isVisible
            ? animate
            : initial
          : hasBeenVisible
          ? animate
          : initial
      }
      transition={transition}
      onAnimationComplete={onAnimationComplete}
      {...props}
    >
      <Component {...props}>{children}</Component>
    </motion.div>
  );
};

export default VisibilityAnimation;
