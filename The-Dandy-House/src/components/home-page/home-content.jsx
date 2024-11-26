import styled from "styled-components";
import CardsComponent from "./cards-component";

const ContentWrapper = styled.div`
  margin-top: 60px;
`;

function HomeContent() {
  return (
    <>
      <ContentWrapper>
        <CardsComponent />
      </ContentWrapper>
    </>
  );
}

export default HomeContent;
