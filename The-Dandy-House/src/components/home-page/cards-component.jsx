import styled from "styled-components";

const Cardbody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background: linear-gradient(135deg, #121212, #860043);
  margin-top: 80px;
`;

const CardTextContent = styled.div`
  
`;

const CardImgContent = styled.img`
  
`;

function CardsComponent() {
  return (
    <>
      <Cardbody>
        <h1>Ciaone</h1>
      </Cardbody>
    </>
  );
}

export default CardsComponent;
