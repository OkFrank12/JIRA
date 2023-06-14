
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import black from "../../../Assets/Assets/blackman.png";

const Customer = () => {
  return (
    <div>
      <Container>
        <Main>
          <TextDiv>
            <BigText>Meet the saver of the month!</BigText>
            <SmallText>
              Every month, we shine a spotlight on one saver, asking them
              questions about their savings culture and how the product is
              specifically helping them shape how they spend and save for future
              responsibilities.
            </SmallText>
            <Sub>
              <Circle>
                <Img />
              </Circle>
              <Context>Meet the Soile's</Context>
            </Sub>
          </TextDiv>
          <ImageHolder>
            <Imgs src={black} />
          </ImageHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Customer;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
`;

const Main = styled.div`
  width: 95%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #0d60d8;
`;

const TextDiv = styled.div`
  width: 450px;
  margin: 5%;
`;

const BigText = styled.div`
  font-size: 51px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SmallText = styled.div``;

const Sub = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const Img = styled(BsArrowRight)`
  color: #0d60d8;
`;

const Context = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 0 10px;
`;

const ImageHolder = styled.div`
  height: 500px;
`;

const Imgs = styled.img`
  height: 100%;
`;
