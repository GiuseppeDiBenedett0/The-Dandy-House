import styled from "styled-components";
import { useParams } from "react-router-dom";
import AnimatedWrapper from "../general-components/animation/animated-wrapper";
import ProgramsTextSection from "../general-components/programs-text-section";
import ProgramsData from "../../data/programs";
import TipsData from "../../data/tips";
import TipsSection from "../tips-section";

const Wrapper = styled.div`
  margin: 60px auto 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #f13932;

  @media (max-width: 547px) {
    font-size: 2.2rem;
  }
`;

const VideoWrapper = styled.div`
  margin: 48px 0 48px 0;
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 16 / 9;
  background-color: #000;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 547px) {
    width: 312px;
  }
`;

const PageParagraph = styled.p`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #e0e0e0;
  text-align: left;
  line-height: 1.7;

  @media (max-width: 547px) {
    font-size: 1.2rem;
  }
`;

function ProgramsPage() {
  const { section } = useParams();

  const sectionData = ProgramsData.find(
    (data) => data.section.toLowerCase() === section.toLowerCase()
  );

  const tipData = TipsData.find(
    (data) => data.section.toLowerCase() === section.toLowerCase()
  );

  if (!sectionData) {
    return (
      <AnimatedWrapper
        $display={"flex"}
        $flexDirection={"column"}
        $alignItems={"center"}
        $justifyContent={"center"}
      >
        <PageTitle>Section not found</PageTitle>
        <PageParagraph>
          The section you are looking for does not exist.
        </PageParagraph>
      </AnimatedWrapper>
    );
  }
  return (
    <>
      <AnimatedWrapper>
        <PageTitle>{sectionData.title}</PageTitle>
        <Wrapper>
          <VideoWrapper>
            <iframe
              src={sectionData.video}
              title={sectionData.videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
        </Wrapper>

        <ProgramsTextSection content={sectionData.content} />
        {tipData && (
          <TipsSection
            audio={tipData.song}
            title={tipData.title}
            paragraph={tipData.paragraph}
            image={tipData.image}
            imageAlt={tipData.imageAlt}
            $backgroundDark={tipData.darkBackground}
            $backgroundLight={tipData.lightBackground}
            $titleDark={tipData.darkTitle}
            $titleLight={tipData.lightTitle}
          />
        )}
      </AnimatedWrapper>
    </>
  );
}

export default ProgramsPage;
