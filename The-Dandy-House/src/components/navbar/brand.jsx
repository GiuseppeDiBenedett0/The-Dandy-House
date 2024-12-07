import styled from "styled-components";

const BrandImg = styled.img`
  width: 43px;
  height: 43px;
  position: relative;
  bottom: 4px;
  left: 4px;

  @media (max-width: 490px) {
    width: 30px;
    height: 30px;
  }
`;

export default BrandImg;