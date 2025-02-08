import styled from "styled-components";
import errorIcon from "../../assets/search-magnifier-magnifying-emoji-happy-svgrepo-com.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;

  @media (max-width: 780px) {
    height: 780px;
  }
`;

const Message = styled.h3`
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.textColors.secondary};
  text-transform: uppercase;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 0 0 12px;
`;

function NoFoundMessage() {
  return (
    <>
      <Wrapper>
        <Message>No results found</Message>
        <Icon src={errorIcon} alt="No found icon" />
      </Wrapper>
    </>
  );
}

export default NoFoundMessage;
