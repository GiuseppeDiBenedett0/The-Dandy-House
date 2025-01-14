import styled from "styled-components";
import { useState } from "react";
import { Card } from "react-bootstrap";
import CardSideNavSection from "./sidebar-cardsection";
import ArticlesCardsData from "../../data/articles-cards";

function ArticlesCardsSection() {
  const [sortOrder, setSortOrder] = useState("newest");
  const [filterAuth, setFilterAuth] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAndSortedArticles = [...ArticlesCardsData]
    .filter((article) => filterAuth === "" || article.author === filterAuth)
    .filter(
      (article) => filterCategory === "" || article.category === filterCategory
    )
    .filter(
      (article) =>
        searchTerm === "" ||
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      return sortOrder === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });

  const avaibleAuthors = [
    ...new Set(
      ArticlesCardsData.filter(
        (article) =>
          (filterCategory === "") | (article.category === filterCategory)
      ).map((article) => article.author)
    ),
  ];

  const avaibleCategories = [
    ...new Set(
      ArticlesCardsData.filter(
        (article) =>
          (filterAuth === "") | (article.author === filterAuth)
      ).map((article) => article.category)
    ),
  ];

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleAuthorFilter = (author) => {
    setFilterAuth(author);
  };

  const handleCategoryFilter = (category) => {
    setFilterCategory(category);
  };

  return (
    <>
      <CardSideNavSection
        resultsNumber={filteredAndSortedArticles.length}
        onSortChange={handleSortChange}
        onFilteredAuht={handleAuthorFilter}
        onFilteredCategory={handleCategoryFilter}
        avaibleAuthors={avaibleAuthors}
        avaibleCategories={avaibleCategories}
        search={searchTerm}
        setSearch={(e) => setSearchTerm(e.target.value)}
        card={
          <>
            {filteredAndSortedArticles.length === 0 ? (
              <div>No results</div>
            ) : (
              filteredAndSortedArticles.map((data, index) => (
                <Card key={index} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={data.image} alt={data.alt} />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <span>{data.author}</span>
                    <span>{data.category}</span>
                    <Card.Text>{data.paragraph}</Card.Text>
                    <span>{data.date}</span>
                  </Card.Body>
                </Card>
              ))
            )}
          </>
        }
      />
    </>
  );
}

export default ArticlesCardsSection;
