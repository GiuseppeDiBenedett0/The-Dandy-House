import styled from "styled-components";
import { useState } from "react";
import HeaderSearchComponent from "../general-components/header-search-component";
import SidebarComponent from "../general-components/sidebar-component";
import CardWrapperComponent from "../general-components/card-wrapper-componet";
import useIsMobile from "../hooks/is-mobile-hook";

const Wrapper = styled.div`
  border: 1px solid #c51400;
  margin: 40px auto 16px auto;
  max-width: 1300px;
  position: relative;
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const HeaderSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

function CardSideNavSection({
  card,
  resultsNumber,
  onSortChange,
  onFilteredAuth,
  onFilteredCategory,
  availableAuthors,
  availableCategories,
  search,
  setSearch,
}) {
  //Stato per la visibilità della sidebar.
  const [isVisible, setIsVisible] = useState(false);
  //Hook personalizzato per verificare se è su telefono.
  const isMobile = useIsMobile();

  //Funzione per alternare la visibilità della sidebar.
  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      {/* Se la visualizzazione è su mobile */}
      {isMobile && (
        <>
          <HeaderSearchContainer>
            <HeaderSearchComponent
              resultsNumber={resultsNumber}
              onSortChange={onSortChange}
              toggleSidebar={toggleSidebar}
              isVisible={isVisible}
              children={
                <SidebarComponent
                  isVisible={isVisible}
                  search={search}
                  setSearch={setSearch}
                  availableAuthors={availableAuthors}
                  availableCategories={availableCategories}
                  handleFilterAuth={(author) =>
                    onFilteredAuth(author === "All Authors" ? "" : author)
                  }
                  handleFilterCategory={(category) =>
                    onFilteredCategory(
                      category === "All Categories" ? "" : category
                    )
                  }
                  onSortChange={onSortChange}
                />
              }
            />
          </HeaderSearchContainer>
          <CardSection>
            <CardWrapperComponent card={card} />
          </CardSection>
        </>
      )}

      {/* Se la visualizzazione non è mobile */}
      {!isMobile && (
        <>
          <HeaderSearchContainer>
            <HeaderSearchComponent
              resultsNumber={resultsNumber}
              onSortChange={onSortChange}
              toggleSidebar={toggleSidebar}
              isVisible={isVisible}
            />
          </HeaderSearchContainer>
          <CardSection>
            <SidebarComponent
              isVisible={isVisible}
              search={search}
              setSearch={setSearch}
              availableAuthors={availableAuthors}
              availableCategories={availableCategories}
              handleFilterAuth={(author) =>
                onFilteredAuth(author === "All Authors" ? "" : author)
              }
              handleFilterCategory={(category) =>
                onFilteredCategory(
                  category === "All Categories" ? "" : category
                )
              }
            />
            <CardWrapperComponent card={card} />
          </CardSection>
        </>
      )}
    </Wrapper>
  );
}

export default CardSideNavSection;
