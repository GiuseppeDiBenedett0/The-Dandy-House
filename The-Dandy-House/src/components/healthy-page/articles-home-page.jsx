import AnimatedWrapper from "../general-components/animation/animated-wrapper";
import TextSection from "../general-components/text-section";
import ArticlesCardsSection from "./articles-recipes-home-cards";
import ArticlesHomeData from "../../data/articles-home";
import ArticlesCardsData from "../../data/articles-cards";

function ArticlesHomePage( { section } ) {
  return (
    <>
      <AnimatedWrapper>
        <TextSection content={ArticlesHomeData} />
        <ArticlesCardsSection articleData={ArticlesCardsData} section={section} />
      </AnimatedWrapper>
    </>
  );
}

export default ArticlesHomePage;
