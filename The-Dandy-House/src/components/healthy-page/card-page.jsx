import styled from "styled-components";
import { useParams } from "react-router-dom";
import TextSection from "../general-components/text-section";
import NoFoundMessage from "../error-message/no-found";

const Container = styled.div`
  margin-top: 100px;
`;

const CustomTitle = styled.h1`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.secondary};
  margin-bottom: 50px;

  @media (max-width: 547px) {
    font-size: 2.2rem;
  }
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
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

  return (
    <>
      <Container>
        <CustomTitle>{card.title}</CustomTitle>
        <Image src={card.image} alt={card.alt} />
        <TextSection content={page.pageText} />
      </Container>
    </>
  );
}

export default CardPage;
