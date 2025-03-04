import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const DropdownWrapper = styled.div`
  position: relative;
`;

const CustomNavDropdown = styled(NavDropdown)`
  margin-left: 12px;
  margin-right: 12px;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.fonts.notoSans};
  text-transform: uppercase;

  .dropdown-menu.show {
    background-color: transparent;
    top: 80%;
    width: 100%;
  }

  .dropdown-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 50px;
    font-size: 1.1rem;

    .border-bottom {
      border-bottom: 1px solid #ffffff;
    }

    &:active,
    &:focus,
    &:visited {
      color: ${({ theme }) => theme.textColors.secondary};
      background-color: transparent;
    }

    &:hover {
      color: ${({ theme }) => theme.textColors.secondary};
      background-color: ${({ theme }) =>
        theme.secondaryButtons.hover.hoverBackground};
    }

    @media (max-width: 991px) {
      height: 40px;
      font-size: 1rem;
    }
  }

  .nav-link {
    display: flex;
    align-items: center;
    color: ${({ theme, $isActive }) =>
      $isActive ? theme.textColors.secondary : theme.textColors.primary};
    height: 70px;
    padding: 0;
  }

  .nav-link.active,
  .nav-link.show {
    color: ${({ theme }) => theme.textColors.secondary} !important;
    background-color: #000000 !important;
  }

  @media (max-width: 1200px) {
    margin-left: 8px;
    margin-right: 8px;
    font-size: 1.2rem;
  }
`;

const CustomDropdownItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45px;
  background-color: transparent;
  color: ${({ theme }) => theme.textColors.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.secondaryButtons.hover.hoverText};
    background-color: ${({ theme }) =>
      theme.secondaryButtons.hover.hoverBackground};
  }
`;

const MotionDropdownMenu = styled(motion.div)`
  background-color: rgba(46, 45, 45, 0.5);
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  max-width: ${({ $smallMenu }) => ($smallMenu ? "124px" : "200px")};
  overflow: hidden;
  z-index: 1;

  @media (max-width: 991px) {
    position: relative;
    width: 100%;
    max-width: 100%;
  }
`;

function CustomDropdown({ dropdownTitle, columns = [], linkSection, isSmall }) {
  //Stato per il toggle della visibilità del menu.
  const [showDropdown, setShowDropdown] = useState(false);
  //Ottieni la posizione corrente per determinare il link attivo.
  const location = useLocation();

  //Verifica se il menu dovrebbe essere attivo.
  const isDropdownActive = columns.some((column) => {
    return location.pathname.includes(`${linkSection}/${column.toLowerCase()}`);
  });

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <>
      <DropdownWrapper
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <CustomNavDropdown
          title={dropdownTitle}
          id="basic-nav-dropdown"
          show={showDropdown}
          $isActive={isDropdownActive}
        >
          <AnimatePresence>
            {showDropdown && (
              <MotionDropdownMenu
                key="drpdown-menu"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                $smallMenu={isSmall}
              >
                {columns.map((column, index) => {
                  const linkPath = `${linkSection}/${column.toLowerCase()}`;
                  const isActive = location.pathname.includes(linkPath);

                  return (
                    <CustomDropdownItem
                      to={`${linkSection}/${column.toLowerCase()}`}
                      key={index}
                      className={`${
                        index < columns.length - 1 ? "border-bottom" : ""
                      } ${isActive ? "active" : ""}`}
                    >
                      {column}
                    </CustomDropdownItem>
                  );
                })}
              </MotionDropdownMenu>
            )}
          </AnimatePresence>
        </CustomNavDropdown>
      </DropdownWrapper>
    </>
  );
}

export default CustomDropdown;
