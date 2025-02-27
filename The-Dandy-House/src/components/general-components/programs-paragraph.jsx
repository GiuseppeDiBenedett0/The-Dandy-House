import styled from "styled-components";
import parse from "html-react-parser";

const Paragraph = styled.p`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.primary};
  text-align: left;
  line-height: ${({ $lineHeight }) => $lineHeight || 1.7};

  .bold {
    color: ${({ theme }) => theme.textColors.secondary};
    font-weight: 600;
  }

  @media (max-width: 547px) {
    font-size: 1.2rem;
  }
`;

function ProgramsParagraph({ paragraph, lineHeight }) {
  return (
    <>
      {/*Il paragrafo viene analizzato come HTML e reso nel componente Paragraph.*/}
      <Paragraph $lineHeight={lineHeight}>{parse(paragraph)}</Paragraph>
    </>
  );
}

export default ProgramsParagraph;
