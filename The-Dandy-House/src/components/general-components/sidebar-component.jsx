import styled from "styled-components";
import { motion } from "framer-motion";
import { Dropdown } from "react-bootstrap";
import FilterComponent from "../healthy-page/filter-component";
import useIsMobile from "../hooks/is-mobile-hook";
import SortByFilter from "../healthy-page/sort-by-filter";

const SideBar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #050505;
  flex-shrink: 0;
  width: 280px;
  overflow: hidden;
  border-right: 1px solid #c51400;
  border-bottom: 1px solid #c51400;

  @media (max-width: 780px) {
    position: absolute;
    z-index: 1;
    top: 131px;
    left: 0;
    width: 100%;
    border-right: none;
  }
`;

const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchBar = styled.input`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 1.4rem;
  margin: 16px 0 12px 0;
  width: 95%;
  border-radius: 10px;
  border: 1px solid #6d6d6d;

  &&:hover,
  &&:focus,
  &&:active {
    outline: none;
  }
`;

const CustomDropdown = styled(Dropdown)`
  @media (max-width: 780px) {
    text-align: justify !important;
  }
  &&.show {
    @media (max-width: 780px) {
      text-align: justify !important;
    }
  }
`;

function SidebarComponent({
  isVisible,
  search,
  setSearch,
  availableAuthors,
  availableCategories,
  handleFilterAuth,
  handleFilterCategory,
  onSortChange,
}) {
  const isMobile = useIsMobile();

  const sidebarVariants = {
    visible: { width: "280px", opacity: 1 },
    hidden: { width: "0px", opacity: 0 },
  };

  const mobileSidebarVariants = {
    visible: { height: "auto", opacity: 1 },
    hidden: { height: "0px", opacity: 0 },
  };

  return (
    <>
      {isMobile && (
        <SideBar
          variants={mobileSidebarVariants}
          initial="visible"
          animate={isVisible ? "visible" : "hidden"}
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
            sectionName={"Authors"}
            items={["All Authors", ...availableAuthors]}
            onClick={handleFilterAuth}
          />
          <FilterComponent
            sectionName={"Categories"}
            items={["All Categories", ...availableCategories]}
            onClick={handleFilterCategory}
          />
          <CustomDropdown autoClose={false}>
            <SortByFilter onSortChange={onSortChange} />
          </CustomDropdown>
        </SideBar>
      )}
      {!isMobile && (
        <SideBar
          variants={sidebarVariants}
          initial="visible"
          animate={isVisible ? "visible" : "hidden"}
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
            sectionName={"Authors"}
            items={["All Authors", ...availableAuthors]}
            onClick={handleFilterAuth}
          />
          <FilterComponent
            sectionName={"Categories"}
            items={["All Categories", ...availableCategories]}
            onClick={handleFilterCategory}
          />
        </SideBar>
      )}
    </>
  );
}

export default SidebarComponent;
