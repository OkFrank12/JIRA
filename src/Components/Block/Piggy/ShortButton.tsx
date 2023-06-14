import styled from "styled-components";

const ShortButton = () => {
  return (
    <div>
      <Container>
        <Main>Sign in</Main>
      </Container>
    </div>
  );
};

export default ShortButton;

const Container = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid #0C1825;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  background-color: white;

  :hover {
    color: #0D60D8;
    border: 1px solid #0D60D8;
    cursor: pointer;
  }
`;

const Main = styled.div``;
