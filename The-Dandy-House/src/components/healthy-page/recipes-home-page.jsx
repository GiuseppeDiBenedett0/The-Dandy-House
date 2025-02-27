import AnimatedWrapper from "../general-components/animation/animated-wrapper";
import TextSection from "../general-components/text-section";
import ArticlesCardsSection from "./articles-recipes-home-cards";
import RecipesHomeData from "../../data/recipes-home";
import RecipesCardsData from "../../data/recipes-cards";

function RecipesHomePage({ section }) {
  return (
    <>
      <AnimatedWrapper>
        <TextSection content={RecipesHomeData} />
        <ArticlesCardsSection articleData={RecipesCardsData} section={section} />
      </AnimatedWrapper>
    </>
  );
}

export default RecipesHomePage;
