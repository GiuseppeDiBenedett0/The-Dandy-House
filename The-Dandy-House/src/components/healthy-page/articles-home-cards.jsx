import styled from "styled-components";
import { useState } from "react";
import { Card } from "react-bootstrap";
import CardSideNavSection from "./sidebar-cardsection";
import useFilteredArticles from "../hooks/filter-section-hook";

const CustomCard = styled(Card)`
  width: 18rem;
  background-color: #f3f3f3;
  border: 1px solid #c51400;

  @media (max-width: 755px) {
    width: 90%;
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
  color: #f13932;
  border-bottom: 1px solid #c51400;
  border-radius: 5px;
  margin-bottom: 16px;
`;

const CustomCardImage = styled(Card.Img)`
  width: 100%;
  border-bottom: 1px solid #c51400;
  padding: 8px;
`;

const CustomCardBody = styled(Card.Body)`
  background-color: #070707;
`;

const CustomCardText = styled(Card.Text)`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 1.2rem;
  color: #ffffff;
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
  color: #f13932;
`;

function ArticlesCardsSection({ articleData }) {
  const [filters, setFilters] = useState({
    sortOrder: "newest",
    filterAuth: "",
    filterCategory: "",
    searchTerm: "",
  });

  const filteredAndSortedArticles = useFilteredArticles(articleData, filters);

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

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <CardSideNavSection
        resultsNumber={filteredAndSortedArticles.length}
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
            {filteredAndSortedArticles.length === 0 ? (
              <div>No results</div>
            ) : (
              filteredAndSortedArticles.map((data, index) => (
                <CustomCard key={index}>
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
              ))
            )}
          </>
        }
      />
    </>
  );
}

export default ArticlesCardsSection;