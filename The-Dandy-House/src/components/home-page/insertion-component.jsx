import styled from "styled-components";
import Pizza from "../../assets/Pizza.png";

const InsertionContainer = styled.div`
  width: 90%;
  height: 20%;
  margin: 40px 0;
  background-color: #070707;
  border: 2px solid #b8b8b8;

  @media (max-width: 940px) {
    width: 100%;
    height: 175px;
  }
`;

const InsertionImg = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 940px) {
    width: 100%;
    height: 100%;
  }
`;

function Insertion() {
  return (
    <>
      <InsertionContainer>
        <a href="/healthy-living/recipes">
          <InsertionImg src={Pizza} alt="Goldlewis pizza" />
        </a>
      </InsertionContainer>
    </>
  );
}

export default Insertion;
