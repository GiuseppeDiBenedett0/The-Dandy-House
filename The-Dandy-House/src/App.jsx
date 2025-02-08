import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import ScrollPage from "./components/general-components/animation/page-scroll";
import CustomNavbar from "./components/navbar/navbar";
import HomeContent from "./components/home-page/home-content";
import Introduction from "./components/programs-page/introduction";
import ArrowUp from "./components/navbar/arrow-up";
import Footer from "./components/footer";
import ProgramsPage from "./components/programs-page/programs-pages";
import ArticlesHomePage from "./components/healthy-page/articles-home-page";
import RecipesHomePage from "./components/healthy-page/repices-home-page";
import CardPage from "./components/healthy-page/card-page";
import ArticlesCardsData from "./data/articles-cards";
import ArticlesPagesData from "./data/Articles-pages";
import RecipesCardsData from "./data/recipes-cards";
import RecipesPagesData from "./data/recipes-pages";
import { useEffect } from "react";

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

  @media (max-width: 450px) {
    padding: 12px;
  }
`;

function App() {
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.history.replaceState(null, "", "/home");
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <CustomNavbar />
      <ScrollPage />
      <ContentWrapper>
        <Routes>
          <Route path="*" element={<HomeContent />} />
          <Route path="/" element={<HomeContent />} />
          <Route path="/home" element={<HomeContent />} />
          <Route path="/programs/introduction" element={<Introduction />} />
          <Route path="/programs/:section" element={<ProgramsPage />} />
          <Route
            path="/healthy-living/articles"
            element={<ArticlesHomePage section={"articles"} />}
          />
          <Route
            path="/healthy-living/articles/:articleId"
            element={
              <CardPage
                cardData={ArticlesCardsData}
                pageData={ArticlesPagesData}
              />
            }
          />
          <Route
            path="/healthy-living/recipes"
            element={<RecipesHomePage section={"recipes"} />}
          />
          <Route
            path="/healthy-living/recipes/:recipeId"
            element={
              <CardPage
                cardData={RecipesCardsData}
                pageData={RecipesPagesData}
              />
            }
          />
        </Routes>
      </ContentWrapper>
      <Footer />
      <ArrowUp />
    </>
  );
}

export default App;
