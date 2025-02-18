import styled from "styled-components";
import { motion } from "framer-motion";
import parse from "html-react-parser";

const CustomOl = styled(motion.ol)`
  font-family: ${({ theme }) => theme.fonts.oswald};
  text-align: left;
`;

const CustomLi = styled(motion.li)`
  font-size: 1.6rem;
  margin: 24px 0;
  padding-left: 8px;
  color: ${({ theme }) => theme.textColors.primary};
  line-height: 2;

  .span-title {
    color: ${({ theme }) => theme.textColors.secondary};
    font-weight: 700;
  }

  .important-text {
    color: ${({ theme }) => theme.textColors.secondary};
    text-decoration: underline;
  }
`;

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function OlList({ items }) {
  // Trova la sezione contenente la lista di regole
  const listData = items.find((item) => item.items) || { items: [] };

  return (
    <CustomOl initial="hidden" animate="visible" variants={listVariants}>
      {listData.items.map((item, index) => (
        <CustomLi
          key={index}
          initial={item.initial}
          animate={item.animate}
          transition={item.transition}
        >
          <span className="span-title">{item.title}</span>{" "}
          {parse(item.description)}
        </CustomLi>
      ))}
    </CustomOl>
  );
}

export default OlList;
