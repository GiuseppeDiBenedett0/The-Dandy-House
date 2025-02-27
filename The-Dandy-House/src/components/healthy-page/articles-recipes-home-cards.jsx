import styled from "styled-components";
import { useState, useRef } from "react";
import { Card } from "react-bootstrap";
import CardSideNavSection from "./sidebar-cardsection";
import useFilteredArticles from "../hooks/filter-section-hook";
import PaginationComponent from "./pagination-component";
import NoFoundMessage from "../error-message/no-found";
import { Link } from "react-router-dom";

const ScrollContainer = styled.div`
  position: relative;
  overflow: auto;
  scroll-behavior: smooth;
`;

const CardLink = styled(Link)`
  display: contents;
  color: inherit;
  text-decoration: none;
`;

const CustomCard = styled(Card)`
  width: 18rem;
  background-color: #f3f3f3;
  border: 1px solid #c51400;
  border-radius: 0;
  transition: transform 0.2s ease-in-out;
  margin: 8px;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 755px) {
    width: 90%;
    margin: 16px 0;
  }
`;

const CustomCardTitle = styled(Card.Title)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: #070707;
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColors.secondary};
  border-bottom: 1px solid #c51400;
  margin-bottom: 16px;
`;

const CustomCardImage = styled(Card.Img)`
  width: 100%;
  border-bottom: 1px solid #c51400;
  padding: 8px;
`;

const CustomCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #070707;
`;

const CustomCardText = styled(Card.Text)`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textColors.primary};
`;
const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InfoContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 1rem;
  color: ${({ theme }) => theme.textColors.secondary};
`;

function ArticlesCardsSection({ articleData, section }) {
  //Stato per i filtri.
  const [filters, setFilters] = useState({
    sortOrder: "newest",
    filterAuth: "",
    filterCategory: "",
    searchTerm: "",
  });
  //Stato per la pagina corrente.
  const [currentPage, setCurrentPage] = useState(1);
  //Items massimi per pagina.
  const itemsPerPage = 6;

  //Riferimento per la sezione.
  const sectionRef = useRef(null);

  //Articoli filtrati e ordinati.
  const filteredAndSortedArticles = useFilteredArticles(articleData, filters);

  //Indici per la paginazione.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = filteredAndSortedArticles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  //Calcolo delle pagine totali.
  const totalPages = Math.ceil(filteredAndSortedArticles.length / itemsPerPage);

  //Funzione per il cambiamento di pagina.
  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (sectionRef.current) {
      const offset = 50;
      const topPosition =
        sectionRef.current.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  //Autori disponibili per il filtro.
  const availableAuthors = [
    ...new Set(
      articleData
        .filter(
          (article) =>
            filters.filterCategory === "" ||
            article.category === filters.filterCategory
        )
        .map((article) => article.author)
    ),
  ];

  //Categorie disponibili per il filtro.
  const availableCategories = [
    ...new Set(
      articleData
        .filter(
          (article) =>
            filters.filterAuth === "" || article.author === filters.filterAuth
        )
        .map((article) => article.category)
    ),
  ];

  //Funzione per aggiornare i filtri.
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  return (
    <>
      <ScrollContainer ref={sectionRef}>
        <CardSideNavSection
          resultsNumber={filteredAndSortedArticles.length || []}
          onSortChange={(order) => handleFilterChange("sortOrder", order)}
          onFilteredAuth={(author) => handleFilterChange("filterAuth", author)}
          onFilteredCategory={(category) =>
            handleFilterChange("filterCategory", category)
          }
          availableAuthors={availableAuthors}
          availableCategories={availableCategories}
          search={filters.searchTerm}
          setSearch={(e) => handleFilterChange("searchTerm", e.target.value)}
          card={
            <>
              {currentArticles.length === 0 ? (
                <NoFoundMessage />
              ) : (
                currentArticles.map((data, index) => (
                  <CardLink key={index} to={`/healthy-living/${section}/${data.id}`}>
                    <CustomCard>
                      <CustomCardTitle>{data.title}</CustomCardTitle>
                      <CustomCardImage
                        variant="top"
                        src={data.image}
                        alt={data.alt}
                      />
                      <CustomCardBody>
                        <CustomCardText>{data.paragraph}</CustomCardText>

                        <CardInfo>
                          <InfoContainer>
                            <InfoText>{data.author}</InfoText>
                          </InfoContainer>
                          <InfoContainer>
                            <InfoText>{data.date}</InfoText>
                          </InfoContainer>
                          <InfoContainer>
                            <InfoText>{data.category}</InfoText>
                          </InfoContainer>
                        </CardInfo>
                      </CustomCardBody>
                    </CustomCard>
                  </CardLink>
                ))
              )}
            </>
          }
        />
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </ScrollContainer>
    </>
  );
}

export default ArticlesCardsSection;
