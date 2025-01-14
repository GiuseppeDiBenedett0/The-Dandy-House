import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import ScrollPage from "./components/general-components/animation/page-scroll";
import CustomNavbar from "./components/navbar/navbar";
import HomeContent from "./components/home-page/home-content";
import Introduction from "./components/programs-page/introduction";
import ArrowUp from "./components/navbar/arrow-up";
import Footer from "./components/footer";
import ProgramsPage from "./components/programs-page/programs-pages";
import ArticlesHomePage from "./components/healthy-page/articles-home-page";

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
  max-width: 1700px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <CustomNavbar />
        <ScrollPage />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/home" element={<HomeContent />} />
            <Route path="/programs/introduction" element={<Introduction />} />
            <Route path="/programs/:section" element={<ProgramsPage />} />
            <Route path="/healthy-living/articles" element={<ArticlesHomePage />} />
          </Routes>
        </ContentWrapper>
        <Footer />
        <ArrowUp />
      </Router>
    </>
  );
}

export default App;
