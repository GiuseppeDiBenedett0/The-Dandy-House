import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dropdown } from "react-bootstrap";
import FilterComponent from "./filter-component";
import filterIconOn from "../../assets/filter_alt_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import filterIconOff from "../../assets/filter_alt_off_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import searchIcon from "../../assets/search_24dp_F13932_FILL0_wght400_GRAD0_opsz24.svg";
import ArticlesCardsData from "../../data/articles-cards";

const Wrapper = styled.div`
  border: 1px solid #c51400;
  margin: 40px auto 16px auto;
  max-width: 1300px;
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
  height: 95px;
`;

const DecorativeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: end;
  background-color: #050505;
  width: calc(100% - 280px);
  border-left: 1px solid #c51400;
  border-bottom: 1px solid #c51400;
`;

const ResultsText = styled.span`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #c51400;
  padding: 8px;
`;

const DropdownButton = styled(Dropdown.Toggle)`
  && {
    background-color: transparent;
    border: none;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.oswald};
    text-transform: uppercase;
    color: #f13932;
  }

  &&:hover,
  &&:focus,
  &&:active {
    background-color: transparent;
    color: #f13932;
    box-shadow: none;
  }
`;

const CustomDropdownMenu = styled(Dropdown.Menu)`
  && {
    background-color: #181818;
    border: 1px solid #c51400;
    border-radius: 0;
    padding: 0;
  }
`;

const CustomDropdownItems = styled(Dropdown.Item)`
  && {
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.fonts.oswald};
    text-transform: uppercase;
    color: #f13932;
    padding: 8px 8px 8px 8px;
  }

  &&:hover,
  &&:focus,
  &&:active {
    background-color: #000000;
    color: #c51400;
    box-shadow: none;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #050505;
  width: 280px;
  border-bottom: 1px solid #c51400;
  padding: 8px;
`;

const HeaderTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #f13932;
  font-size: 1.8rem;
`;

const FilterButton = styled.button`
  display: flex;
  width: 232px;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fonts.oswald};
  text-transform: uppercase;
  font-weight: 600;
`;

const SideBar = motion.create(styled.div`
  display: flex;
  flex-direction: column;
  background-color: #050505;
  flex-shrink: 0;
  width: 280px;
  overflow: hidden;
`);

const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchBar = styled.input`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 1.4rem;
  margin: 12px 0;
  width: 100%;
  padding-right: 40px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  flex-grow: 1;
  margin: 16px 0 16px 0;
`;

function CardSideNavSection({
  card,
  resultsNumber,
  onSortChange,
  onFilteredAuht,
  onFilteredCategory,
  avaibleAuthors,
  avaibleCategories,
  search,
  setSearch,
}) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  const handleFilterAuth = (author) => {
    if (author === "All Author") {
      onFilteredAuht("");
    } else {
      onFilteredAuht(author);
    }
  };

  const handleFilterCategory = (category) => {
    if (category === "All Categories") {
      onFilteredCategory("");
    } else {
      onFilteredCategory(category);
    }
  };

  return (
    <Wrapper>
      <HeaderSearchContainer>
        <SideBarHeader>
          <HeaderTitle>Our Articles</HeaderTitle>
          <FilterButton variant="light" onClick={toggleSidebar}>
            <img
              src={isVisible ? filterIconOn : filterIconOff}
              alt="Filter Icon"
            />{" "}
            Filter
          </FilterButton>
        </SideBarHeader>
        <DecorativeContainer>
          <ResultsText>{resultsNumber} results</ResultsText>
          <Dropdown>
            <DropdownButton variant="light" id="dropdown-autoclose-true">
              Sort by
            </DropdownButton>

            <CustomDropdownMenu>
              <CustomDropdownItems onClick={() => onSortChange("newest")}>
                Newest
              </CustomDropdownItems>
              <CustomDropdownItems onClick={() => onSortChange("oldest")}>
                Oldest
              </CustomDropdownItems>
            </CustomDropdownMenu>
          </Dropdown>
        </DecorativeContainer>
      </HeaderSearchContainer>
      <CardSection>
        <SideBar
          initial={{ width: "280px" }}
          animate={{ width: isVisible ? "280px" : "0px" }}
          transition={{ duration: 0.5 }}
        >
          <SearchBarContainer>
            <SearchBar
              type="text"
              placeholder="Search"
              value={search}
              onChange={setSearch}
            />
          </SearchBarContainer>

          <FilterComponent
            sectionName={"Author"}
            items={["All Author", ...avaibleAuthors]}
            onClick={handleFilterAuth}
          />
          <FilterComponent
            sectionName={"Categories"}
            items={["All Categories", ...avaibleCategories]}
            onClick={handleFilterCategory}
          />
        </SideBar>
        <CardWrapper>{card}</CardWrapper>
      </CardSection>
    </Wrapper>
  );
}

export default CardSideNavSection;
