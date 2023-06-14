

import styled from "styled-components";
import apple from "../../../Assets/Assets/apple-icon.svg";
import google from "../../../Assets/Assets/google-icon.svg";
import Square from "../../../Assets/Assets/piggyHeroImg.png";
import Girl from "../../../Assets/Assets/girl.png";
import rent from "../../../Assets/Assets/rent.png";
import invest from "../../../Assets/Assets/invest.png";
import LongButton from "./LongButton";

const Hero = () => {
  const data = [
    { images: apple, text: "Get on iPhone" },
    { images: google, text: "Get on Andriod" },
  ];
  return (
    <div>
      <Container>
        <Main>
          <HolderLeft>
            <BoldText>The Better Way to Save & Invest.</BoldText>
            <LightText>
              PiggyVest helps over 4 million customers achieve their financial
              goals by helping them save and invest with ease.
            </LightText>
            <LongButton />
            <Div>
              {data.map((props: any) => (
                <InstallOptions1>
                  <Img src={props.images} />
                  <Text>{props.text}</Text>
                </InstallOptions1>
              ))}
            </Div>
          </HolderLeft>
          <HolderRight>
            <SquareBg src={Square} />
            <GirlImg src={Girl} />
            <Rent src={rent} />
            <Invest src={invest} />
          </HolderRight>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0c1825;
  font-size: 18px;
  margin-top: 80px;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HolderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 70%;
`;

const BoldText = styled.div`
  font-size: 68px;
  font-weight: 700;
  width: 590px;
`;

const LightText = styled.div`
  width: 560px;
`;

const Div = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  width: 320px;
`;

const InstallOptions1 = styled.div`
  width: 150px;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  border: 1px solid silver;
  font-size: 15px;
  transition: all 300ms;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Img = styled.img``;

const Text = styled.div``;

const HolderRight = styled.div`
  background-color: whitesmoke;
  width: 370px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const SquareBg = styled.img`
  height: 450px;
  width: 300px;
  position: absolute;
  right: 150px;
  top: 50px;
`;

const GirlImg = styled.img`
  height: 400px;
  width: 290px;
  position: absolute;
  right: 200px;
  top: 75px;
`;

const Rent = styled.img`
  width: 220px;
  height: 95px;
  position: absolute;
  right: 400px;
  top: 140px;
`;

const Invest = styled.img`
  width: 220px;
  height: 95px;
  position: absolute;
  left: 70px;
  top: 370px;
`;
