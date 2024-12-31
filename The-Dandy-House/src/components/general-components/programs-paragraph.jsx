import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #e0e0e0;
  text-align: left;
  line-height: 1.7;

  .bold {
    color: #f13932;
    font-weight: 600;
  }

  @media(max-width: 547px){
    font-size: 1.2rem;
  }
`;

function ProgramsParagraph({ paragraph }) {
  return (
    <>
       <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }} />
    </>
  );
};

export default ProgramsParagraph;
