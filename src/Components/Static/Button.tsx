import React from "react";
import styled from "styled-components";
import { iBtn } from "../../Utils/Interface";

const Button: React.FC<iBtn> = ({ title, icon, color, bdr, bg, onClick, brad, fs }) => {
  return (
    <div>
      <Container onClick={onClick}>
        <Main color={`${color}`} bg={`${bg}`} brad={`${brad}`} bdr={`${bdr}`}>
          <Icon>{icon}</Icon>
          <Div fs={`${fs}`}>{title}</Div>
        </Main>
      </Container>
    </div>
  );
};

export default Button;

const Container = styled.div`
  margin: 0 10px;
`;

const Main = styled.div<{
  color: string;
  bg: string;
  brad: string;
  bdr: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  min-width: 120px;
  border-radius: ${({brad}) => brad};
  padding: 0 4px;
  background-color: ${({ bg }) => bg};
  transition: all 350ms;
  color: ${({ color }) => color};
  border: ${({bdr}) => bdr};


  :hover {
    cursor: pointer;
    background-color: #f3f3f3;
    color: #1c7ed6;
  }
`;

const Icon = styled.div`
  color: #1c7ed6;
  margin-top: 5px;
  margin-right: 5px;
`;

const Div = styled.div<{
  fs: string
  }>`
  font-size: ${({fs}) => fs};
  font-weight: 700;
  opacity: 0.7;
`;
