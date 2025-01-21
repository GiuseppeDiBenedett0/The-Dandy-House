import AnimatedWrapper from "../general-components/animation/animated-wrapper";
import ProgramsTextSection from "../general-components/programs-text-section";
import ArticlesCardsSection from "./articles-home-cards";
import ArticlesHomeData from "../../data/articles-home";
import ArticlesCardsData from "../../data/articles-cards";

function ArticlesHomePage() {
  return (
    <>
      <AnimatedWrapper>
        <ProgramsTextSection content={ArticlesHomeData} />
        <ArticlesCardsSection articleData={ArticlesCardsData} />
      </AnimatedWrapper>
    </>
  );
}

export default ArticlesHomePage;
