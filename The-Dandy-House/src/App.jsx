import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import CustomNavbar from "./components/navbar/navbar";
import HomeContent from "./components/home-page/home-content";
import ArrowUp from "./components/navbar/arrow-up";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor.background};
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #root {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <CustomNavbar />
      <ContentWrapper>
        <HomeContent />
      </ContentWrapper>
      <ArrowUp/>
    </>
  );
}

export default App;
