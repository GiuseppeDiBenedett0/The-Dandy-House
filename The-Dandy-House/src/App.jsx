import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled, { createGlobalStyle } from "styled-components";
import CustomNavbar from "./components/navbar/navbar";
import MainContent from "./components/main";
import ArrowUp from "./components/navbar/arrow-up";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
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
        <MainContent />
      </ContentWrapper>
      <ArrowUp/>
    </>
  );
}

export default App;
