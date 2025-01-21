import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  flex-grow: 1;
  margin: 16px 0 16px 0;
`;

function CardWrapperComponent({ card }) {
  return (
    <>
      <CardWrapper>{card}</CardWrapper>
    </>
  );
}

export default CardWrapperComponent;
