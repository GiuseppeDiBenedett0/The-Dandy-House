import { useState } from "react";
import styled from "styled-components";
import VisibilityAnimation from "../general-components/animation/visibility-animation";
import AboutUsData from "../../data/about-us";
import StaffCard from "../general-components/animation/staff-card";
import StaffData from "../../data/staff";
import DropdownArrow from "../../assets/arrow_drop_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  padding: 40px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextSection = styled.section`
  max-width: 996px;
`;

const MainTitle = styled.h1`
  font-size: 2.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.secondary};
  text-transform: uppercase;
  margin-bottom: 70px;

  @media (max-width: 547px) {
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.primary};
  margin-bottom: 40px;

  @media (max-width: 547px) {
    font-size: 1.4rem;
  }

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

const SubTitles = styled.h2`
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.secondary};
  margin-bottom: 24px;

  @media (max-width: 547px) {
    font-size: 1.8rem;
  }

  @media (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  min-width: 698px;
  height: 44px;
  margin-bottom: 24px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.primaryButtons.activeBackground};
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 1.5rem;
  text-transform: uppercase;

  &:hover,
  &:focus,
  &:active {
    border-color: transparent;
  }

  @media (max-width: 698px) {
    min-width: 450px;
  }

  @media (max-width: 450px) {
    min-width: 350px;
  }

  @media (max-width: 350px) {
    min-width: 250px;
  }
`;

const ButtonText = styled.span`
  flex-grow: 1;
  text-align: center;
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const ArrowImg = styled.img`
  width: 24px;
  height: 24px;
`;

function AboutUsPage() {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {AboutUsData.map((data, index) => (
        <Container key={index}>
          <VisibilityAnimation
            as={TextSection}
            initial={data.initial}
            animate={data.animate}
            transition={data.transition}
            repeat={false}
          >
            <MainTitle>{data.mainTitle}</MainTitle>
            <Paragraph>{data.introduction}</Paragraph>
          </VisibilityAnimation>

          {data.sections.map((section, i) => {
            const sectionIndex = `${index}-${i}`;
            return (
              <SectionContainer key={sectionIndex}>
                <DropdownButton onClick={() => toggleSection(sectionIndex)}>
                  {openSections.includes(sectionIndex)}
                  <ButtonText>{section.title}</ButtonText>
                  <ArrowContainer>
                    <ArrowImg src={DropdownArrow} alt="Arrow" />
                  </ArrowContainer>
                </DropdownButton>
                {openSections.includes(sectionIndex) && (
                  <VisibilityAnimation
                    key={i}
                    as={TextSection}
                    initial={section.initial}
                    animate={section.animate}
                    transition={section.transition}
                    repeat={false}
                  >
                    <SubTitles>{section.title}</SubTitles>
                    <Paragraph>{section.content}</Paragraph>
                    {section.title === "Meet Our Team" && (
                      <StaffCard cardData={StaffData} />
                    )}
                  </VisibilityAnimation>
                )}
              </SectionContainer>
            );
          })}
        </Container>
      ))}
    </>
  );
}

export default AboutUsPage;
