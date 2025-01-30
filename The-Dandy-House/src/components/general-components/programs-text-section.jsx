import styled from "styled-components";
import ProgramsParagraph from "./programs-paragraph";

const CustomTitle = styled.h1`
  font-size: 2.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.secondary};
  margin-bottom: 50px;

  @media (max-width: 547px) {
    font-size: 2.2rem;
  }
`;

const CustomSubTitle = styled.h2`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.secondary};
  margin: 30px 0 30px 0;
  text-align: left;

  @media (max-width: 547px) {
    font-size: 1.5rem;
  }
`;

const CustomUl = styled.ul`
  padding-left: 20px;
  margin: 20px 0;
`;

const CustomLi = styled.li`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.primary};
  text-align: left;
  line-height: 1.7;
  padding: 16px;

  .section-title {
    color: ${({ theme }) => theme.textColors.secondary};
    font-weight: 700;
  }

  @media (max-width: 547px) {
    font-size: 1.2rem;
  }
`;

function ProgramsTextSection({ content }) {
  return (
    <>
      {content.map((section, index) => {
        if (section.type === "title") {
          return <CustomTitle key={index}>{section.content}</CustomTitle>;
        }
        if (section.type === "subtitle") {
          return <CustomSubTitle key={index}>{section.content}</CustomSubTitle>;
        }
        if (section.type === "paragraph") {
          return <ProgramsParagraph key={index} paragraph={section.content} />;
        }
        if (section.type === "list") {
          return (
            <CustomUl key={index} aria-label="Training levels">
              {section.items.map((item, i) => (
                <CustomLi key={i}>
                  <span className="section-title">{item.title}</span>{" "}
                  {item.description}
                </CustomLi>
              ))}
            </CustomUl>
          );
        }
        return null;
      })}
    </>
  );
}

export default ProgramsTextSection;
