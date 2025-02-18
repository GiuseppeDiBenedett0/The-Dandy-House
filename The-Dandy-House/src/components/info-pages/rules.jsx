import AnimatedWrapper from "../general-components/animation/animated-wrapper";
import TextSection from "../general-components/text-section";
import OlList from "../general-components/ordered-list-component";
import RulesData from "../../data/rules";

function RulesPage() {
  return (
    <>
      <AnimatedWrapper>
        <TextSection content={RulesData} />
        <OlList items={RulesData} />
      </AnimatedWrapper>
    </>
  );
}

export default RulesPage;
