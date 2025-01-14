import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";

const CustomDropdownToggle = styled(Dropdown.Toggle)`
  && {
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.fonts.oswald};
    background-color: transparent;
    color: #f13932;
    text-align: justify;
    border: none;
    border-radius: 0;
    width: 100%;
    padding: 8px;
  }
`;

const CustomDropdownMenu = styled(Dropdown.Menu)`
  && {
    position: static !important;
    transform: translate(0, 0) !important;
    background-color: #181818;
    border: 1px solid #c51400;
    border-radius: 0;
    padding: 0;
    width: 100%;
    left: 0;
  }
`;

const CustomDropdownItems = styled(Dropdown.Item)`
  && {
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.fonts.oswald};
    color: #c51400;
    padding: 12px;

    &&:hover,
    &&:focus,
    &&:active {
      background-color: #000000;
      color: #c51400;
      box-shadow: none;
    }

    ${(props) =>
      props.active &&
      `
        background-color: #000000;
        color: #c51400;
        box-shadow: none;
      `}
  }
`;
function FilterComponent({ sectionName, items = [""], onClick }) {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!selectedItem && items.includes("All Author")) {
      setSelectedItem("All Author");
    } else if (!selectedItem && items.includes("All Categories")) {
      setSelectedItem("All Categories");
    }
  }, [items, selectedItem]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onClick(item);
  };

  return (
    <Dropdown autoClose={false}>
      <CustomDropdownToggle>{sectionName}</CustomDropdownToggle>
      <CustomDropdownMenu>
        {items.map((item, index) => (
          <CustomDropdownItems
            key={index}
            onClick={() => handleItemClick(item)}
            active={selectedItem === item}
          >
            {item}
          </CustomDropdownItems>
        ))}
      </CustomDropdownMenu>
    </Dropdown>
  );
}

export default FilterComponent;
