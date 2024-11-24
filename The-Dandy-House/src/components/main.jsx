import { h1 } from "framer-motion/client";
import styled from "styled-components";

const TestDiv = styled.div`
  width: 100%;
  height: 2000px;
  margin-top: 80px;
  background-color: wheat;
`;

function MainContent() {
    return(
        <>
        <TestDiv>
            <h1>Ciao</h1>
        </TestDiv>
        </>
    )
}

export default MainContent;