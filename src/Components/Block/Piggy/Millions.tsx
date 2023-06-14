

import apple from "../../../Assets/Assets/apple-icon.svg";
import google from "../../../Assets/Assets/google-icon.svg";
import styled from "styled-components";
import anImg from "../../../Assets/Assets/landing.png";
import LongButton from "./LongButton";

const Millions = () => {
  const data = [
    { images: apple, text: "Get on iPhone" },
    { images: google, text: "Get on Andriod" },
  ];
  return (
    <div>
      <Container>
        <Main>
          <ImageHolder>
            <Img src={anImg} />
          </ImageHolder>
          <TextHolder>
            <BigText>4 Million + customers</BigText>
            <SmallText>
              Since launching in 2016, over 4,000,000 people have used PiggyVest
              to manage their money better, avoid over-spending and be more
              accountable.
            </SmallText>
            <LongButton />
            <Div>
              {data.map((props: any) => (
                <InstallOptions1>
                  <Imgs src={props.images} />
                  <Text>{props.text}</Text>
                </InstallOptions1>
              ))}
            </Div>
          </TextHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Millions;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0c1825;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ImageHolder = styled.div`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const TextHolder = styled.div``;

const BigText = styled.div`
  font-size: 33px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SmallText = styled.div`
  width: 400px;
  line-height: 1.7;
  margin-bottom: 30px;
`;

const Div = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  width: 320px;
  margin-top: 30px;

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

const Text = styled.div``;

const Imgs = styled.img``;