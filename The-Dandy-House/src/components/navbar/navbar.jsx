import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import BrandImg from "./brand";
import CustomDropdown from "./nav-dropdown";
import brandImage from "../../assets/flying-bat-svgrepo-com.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledNavbar = styled(Navbar)`
  background-color: #000000;
  width: 100%;
  height: 80px;
  justify-content: center;
  padding: 0;
  position: fixed;
  z-index: 10;

  @media (max-width: 991px) {
    justify-content: space-around;
    height: auto;
  }
`;

const CustomContainer = styled(Container)`
  width: 100%;
  height: 80px;
  margin: 0;

  @media (max-width: 990px) {
    height: auto;
  }
`;

const CustomBrand = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.notoSans};
  margin-right: 24px;
  color: ${({ theme }) => theme.textColors.primary};

  &:hover,
  &:active,
  &:focus,
  &:visited {
    color: ${({ theme }) => theme.textColors.primary};
  }

  @media (max-width: 490px) {
    font-size: 1.3rem;
  }
`;

const HomeLink = styled(NavLink).attrs(({ isActive }) => ({
  className: isActive ? "active" : "",
}))`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.fonts.notoSans};
  margin: 18px 18px 18px 18px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.textColors.secondary : theme.textColors.primary};

  &.active {
    color: ${({ theme }) => theme.textColors.secondary};
  }

  &:hover {
    color: ${({ theme }) => theme.textColors.secondary};
  }

  @media (max-width: 1200px) {
    font-size: 1.2rem;
    margin: 21px 18px 20px 18px;
  }

  @media (max-width: 991px) {
    font-size: 1.2rem;
    margin: 21px 18px 20px 8px;
  }
`;

const CustomNav = styled(Nav)`
  color: ${({ theme }) => theme.textColors.primary};
`;

const MenuToggle = styled(Navbar.Toggle)`
  color: transparent;
  border-color: transparent;

  &:hover,
  &:active,
  &:focus,
  &:visited {
    border-color: transparent;
  }
`;

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <StyledNavbar
        expand="lg"
        variant="dark"
        expanded={expanded}
        ref={navbarRef}
      >
        <CustomContainer>
          <CustomBrand to={`/home`}>
            The Dandy Step
            <BrandImg src={brandImage} />
          </CustomBrand>
          <MenuToggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <CustomNav className="me-auto">
              <HomeLink to={`/home`}>Home</HomeLink>
              <CustomDropdown
                dropdownTitle={"Programs"}
                linkSection={"Programs"}
                columns={["Introduction", "Beginner", "Average", "Expert"]}
              />
              <CustomDropdown
                dropdownTitle={"Healthy living"}
                linkSection={"Healthy-living"}
                columns={["Articles", "Recipes"]}
              />
              <CustomDropdown
                dropdownTitle={"Dei giochi"}
                linkSection={"Dei giochi"}
                columns={["Ciao", "Stefi", "Sono"]}
              />
            </CustomNav>
          </Navbar.Collapse>
        </CustomContainer>
      </StyledNavbar>
    </>
  );
}

export default CustomNavbar;
