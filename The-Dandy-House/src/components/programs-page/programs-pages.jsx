import styled from "styled-components";
import { useParams } from "react-router-dom";
import ProgramsData from "../../data/programs";

const Wrapper = styled.div`
  margin: 132px auto 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #f13932;
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
`;

const PageParagraph = styled.p`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #e0e0e0;
  text-align: left;
  line-height: 1.7;
`;

function ProgramsPage() {
  const { section } = useParams();

  const sectionData = ProgramsData.find(
    (data) => data.section.toLowerCase() === section.toLowerCase()
  );

  if (!sectionData) {
    return (
      <Wrapper>
        <PageTitle>Section not found</PageTitle>
        <PageParagraph>
          The section you are looking for does not exist.
        </PageParagraph>
      </Wrapper>
    );
  }
  return (
    <>
        return (
          <Wrapper>
            <PageTitle>{sectionData.title}</PageTitle>
            <VideoWrapper>
              <iframe
                src={sectionData.video}
                title={sectionData.videoTitle}
                allow="accelerometer; autoplay; cilpboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoWrapper>
            <PageParagraph>{sectionData.paragraph}</PageParagraph>
          </Wrapper>
        );
    </>
  );
}

export default ProgramsPage;
