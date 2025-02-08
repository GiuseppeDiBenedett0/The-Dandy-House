import styled from "styled-components";
import { useParams } from "react-router-dom";
import TextSection from "../general-components/text-section";

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
  const { articleId, recipeId } = useParams();

  const id = parseInt(articleId || recipeId);

  const card = cardData.find((card) => card.id === id);
  const page = pageData.find((page) => page.id === id);

  console.log("ID ricevuto:", id);
  console.log("CardData:", cardData);
  console.log("PageData:", pageData);

  if (!card) {
    return (
      <>
        <p>pagina non trovata</p>
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
