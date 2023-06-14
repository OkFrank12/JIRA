import styled from "styled-components";

import shield from "../../../Assets/Assets/shield.png";
import { BsArrowRight } from "react-icons/bs";
import flex from "../../../Assets/Assets/flex.png";

import lock from "../../../Assets/Assets/lock.png";
import goal from "../../../Assets/Assets/goal.png";
const Deploys = () => {
  const newData = [
    {
      title: "Automated Savings",
      light:
        "Build a dedicated savings faster on your terms automatically or maually",
      images: shield,
      writes: "Piggybank",
      bg: "#e0efff",
      c: "#003398"
    },
    {
      title: "Fixed Savings",
      light:
        "Lock money away for a fixed duration with no access to it until maturity. It's like having a custom fixed deposits",
      images: lock,
      writes: "Safelock",
      bg: "#E3F5FF",
      c: "#3A9AFF"
    },
    {
      title: "Goal Oriented Savings",
      light:
        "Reach all your savings goals faster. Save towards multiple goals on your own or with a group",
      images: goal,
      writes: "Target Savings",
      bg: "#E4FFF1",
      c: "#0F9E47"
    },
    {
      title: "Flexible Savings",
      light:
        "Save, transfer, withdraw, manage and organise your money for free at any time.",
      images: flex,
      writes: "Flex Naira",
      bg: "#FDE7F5",
      c: "#E84A9F"
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <LeftHolder>
            <BoldTop>4 ways to build your savings</BoldTop>
            <LightTop>
              Earn 5%-15% when you save with any of these PiggyVest plans.
            </LightTop>
            <Parent>
              <Child>Start saving</Child>
            </Parent>
          </LeftHolder>
          <RightHolder>
            {newData.map((props: any) => {
              return (
                <SmallCan>
                  <Div>
                    <Img src={props.images} />
                  </Div>
                  <BoldTitle>{props.title}</BoldTitle>
                  <LightText>{props.light}</LightText>
                  <Shifter>
                    <Circle bg={props.bg}>
                      <Icon c={props.c}/>
                    </Circle>
                    <Details>{props.writes}</Details>
                  </Shifter>
                </SmallCan>
              );
            })}
          </RightHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Deploys;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0c1825;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 100%;
`;

const LeftHolder = styled.div`
  width: 300px;
  height: 250px;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const BoldTop = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const LightTop = styled.div``;

const Parent = styled.div`
  border-radius: 10px;
  color: white;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c1825;
  font-weight: 600;
  cursor: pointer;
  transition: all 300ms;

  :hover{
    background-color: #0D60D8;
  }
`;

const Child = styled.div``;

const RightHolder = styled.div`
  width: 700px;
  height: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SmallCan = styled.div`
  width: 280px;
  height: 270px;
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 16px;
  cursor: pointer;
`;

const Div = styled.div`
  width: 50px;
  height: 50px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const BoldTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const LightText = styled.div``;

const Shifter = styled.div`
  display: flex;
  align-items: center;
  transition: all 350ms;

  :hover{
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Circle = styled.div<{
  bg: string;
}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(BsArrowRight)<{
  c: string;
}>`
  color: ${({ c }) => c};
`;

const Details = styled.div`
  margin-left: 10px;
  font-weight: 500;
`;
