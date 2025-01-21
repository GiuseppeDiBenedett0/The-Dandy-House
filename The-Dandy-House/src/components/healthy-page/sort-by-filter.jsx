import { useState } from "react";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

const DropdownButton = styled(Dropdown.Toggle)`
  && {
    background-color: transparent;
    border: none;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.oswald};
    color: #f13932;
  }

  &&:hover,
  &&:focus,
  &&:active {
    background-color: transparent;
    color: #f13932;
    box-shadow: none;
  }

  @media (max-width: 780px) {
    padding: 8px;
    margin: 0;
    font-size: 1.4rem !important;
  }
`;

const CustomDropdownMenu = styled(Dropdown.Menu)`
  && {
    background-color: #181818;
    border-top: 1px solid #c51400;
    border-bottom: 1px solid #c51400;
    border-radius: 0;
    padding: 0;
  }

  &&.show {
    @media (max-width: 780px) {
      position: relative !important;
      transform: none !important;
      text-align: justify !important;
      width: 100%;
    }
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
    background-color: #050505;
    color: #c51400;
    box-shadow: none;
  }

  &.active-item {
    background-color: #000000;
    color: #c51400;

    &:hover {
      background-color: #000000;
    }
  }
`;

function SortByFilter({ onSortChange }) {
  const [isActive, setIsActive] = useState("newest");
  return (
    <>
      <DropdownButton variant="light" id="dropdown-autoclose-true">
        Sort by
      </DropdownButton>
      <CustomDropdownMenu>
        <CustomDropdownItems
          className={isActive === "newest" ? "active-item" : ""}
          onClick={() => {
            onSortChange("newest");
            setIsActive("newest");
          }}
        >
          Newest
        </CustomDropdownItems>
        <CustomDropdownItems
          className={isActive === "oldest" ? "active-item" : ""}
          onClick={() => {
            onSortChange("oldest");
            setIsActive("oldest");
          }}
        >
          Oldest
        </CustomDropdownItems>
      </CustomDropdownMenu>
    </>
  );
}

export default SortByFilter;
