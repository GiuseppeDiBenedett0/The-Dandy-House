import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import SortByFilter from "../healthy-page/sort-by-filter";
import useIsMobile from "../hooks/is-mobile-hook";
import filterIconOn from "../../assets/filter_alt_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import filterIconOff from "../../assets/filter_alt_off_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

const HeaderSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;
  flex-direction: column;
  background-color: #050505;
  width: 280px;
  border-bottom: 1px solid #c51400;
  padding: 8px;

  @media (max-width: 780px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const HeaderTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #f13932;
  font-size: 1.8rem;
  margin-bottom: 4px;

  @media (max-width: 780px) {
    font-size: 1.6rem;
    margin-bottom: 8px;
  }
`;

const DecorativeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: end;
  background-color: #050505;
  width: calc(100% - 280px);
  border-left: 1px solid #c51400;
  border-bottom: 1px solid #c51400;

  @media (max-width: 780px) {
    border-left: none;
    width: 0;
  }
`;

const ResultsText = styled.span`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #f13932;
  padding: 8px;

  @media (max-width: 780px) {
    padding: 0;
    margin: 8px 0;
  }
`;

const TextWrapper = styled.div`
  @media (max-width: 780px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

const FilterButton = styled.button`
  background-color: #f9f9f9;
  color: #000000;
  display: flex;
  width: 232px;
  height: 45px;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fonts.oswald};
  text-transform: uppercase;
  font-weight: 600;

  &&:hover,
  &&:focus,
  &&:active {
    box-shadow: none;
    border: 1px solid #6d6d6d;
  }

  img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 780px) {
    width: 80%;
    margin: 8px 0;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

function HeaderSearchComponent({
  resultsNumber,
  onSortChange,
  toggleSidebar,
  isVisible,
  children,
}) {
  //Hook personalizzato per determinare se il dispositivo è mobile.
  const isMobile = useIsMobile();

  return (
    <>
      <HeaderSearchContainer>
        {isMobile && (
          <>
            <SideBarHeader>
              <TextWrapper>
                <HeaderTitle>Our Articles</HeaderTitle>
                <ResultsText>{resultsNumber} results</ResultsText>
              </TextWrapper>
              <FilterButton onClick={toggleSidebar}>
                <img
                  src={isVisible ? filterIconOn : filterIconOff}
                  alt="Filter Icon"
                />{" "}
                Filter
              </FilterButton>
              <div>{children}</div>
            </SideBarHeader>
          </>
        )}

        {!isMobile && (
          <>
            <SideBarHeader>
              <HeaderTitle>Our Articles</HeaderTitle>
              <FilterButton $variant="light" onClick={toggleSidebar}>
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
                <SortByFilter onSortChange={onSortChange} />
              </Dropdown>
            </DecorativeContainer>
          </>
        )}
      </HeaderSearchContainer>
    </>
  );
}

export default HeaderSearchComponent;
