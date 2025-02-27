import styled from "styled-components";
import { useParams } from "react-router-dom";
import TextSection from "../general-components/text-section";
import AnimatedWrapper from "../general-components/animation/animated-wrapper";
import NoFoundMessage from "../error-message/no-found";

const CustomTitle = styled.h1`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.secondary};
  margin-bottom: 24px;

  @media (max-width: 547px) {
    font-size: 2.2rem;
  }
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  margin: 24px 0;

  @media (max-width: 675px) {
    width: 100%;
    height: 100%;
  }
`;

function CardPage({ cardData, pageData }) {
  //Estrae i parametri dalla URL per ottenere l'ID dell'articolo o della ricetta.
  const { articleId, recipeId } = useParams();
  //Determina l'ID (articolo o ricetta).
  const id = parseInt(articleId || recipeId);

  //Trova il dato corrispondente all'ID.
  const card = cardData.find((card) => card.id === id);
  const page = pageData.find((page) => page.id === id);

  //Se non viene trovato il dato corrispondente, mostra un messaggio di errore.
  if (!card) {
    return (
      <>
        <NoFoundMessage />
      </>
    );
  }

  if (!page) {
    return <NoFoundMessage />;
  }

  return (
    <>
      <AnimatedWrapper>
        <CustomTitle>{card.title}</CustomTitle>
        <Image src={card.image} alt={card.alt} />
        <TextSection paragraphLineHeight={2.1} content={page.pageText} />
      </AnimatedWrapper>
    </>
  );
}

export default CardPage;
