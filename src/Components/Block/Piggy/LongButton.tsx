import React from "react";
import styled from "styled-components";

const LongButton = () => {
  return (
    <div>
      <Container>
        <Main>Create free account</Main>
      </Container>
    </div>
  );
};

export default LongButton;

const Container = styled.div`
  width: 220px;
  height: 50px;
  border-radius: 10px;
  background-color: #0c1825;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  transition: all 300ms;

  :hover {
    cursor: pointer;
    background-color: #0D60D8;
  }
`;

const Main = styled.div``;
