import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import BrandImg from "./brand";
import CustomDropdown from "./nav-dropdown";
import brandImage from "../../assets/flying-bat-svgrepo-com.svg";
import menuIcon from "../../assets/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
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

const CustomBrand = styled(Navbar.Brand)`
  text-transform: uppercase;
  font-size: 2rem;
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
  return (
    <>
      <StyledNavbar expand="lg" variant="dark">
        <CustomContainer>
          <CustomBrand href="#home">
            The Dandy Step
            <BrandImg src={brandImage} />
          </CustomBrand>
          <MenuToggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <CustomNav className="me-auto">
              <CustomDropdown
                dropdownTitle={"Lo strano"}
                columns={["Ciao", "Stefi", "Sono", "Papà"]}
              />
              <CustomDropdown
                dropdownTitle={"Caso"}
                columns={["Ciao", "Stefi"]}
              />
              <CustomDropdown
                dropdownTitle={"Dei giochi"}
                columns={["Ciao", "Stefi", "Sono"]}
              />
              <CustomDropdown
                dropdownTitle={"Olimpici"}
                columns={["Ciao", "Stefi", "Sono", "Papà"]}
              />
            </CustomNav>
          </Navbar.Collapse>
        </CustomContainer>
      </StyledNavbar>
    </>
  );
}

export default CustomNavbar;
