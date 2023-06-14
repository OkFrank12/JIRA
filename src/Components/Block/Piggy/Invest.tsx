
import styled from "styled-components";
import capture from "../../../Assets/Assets/Capture.png";
import { RiArrowDropRightLine } from "react-icons/ri";

const Invest = () => {
  return (
    <div>
      <Container>
        <Main>
          <Cover>
            <Phone src={capture} />
          </Cover>
          <TextPart>
            <Div>
              <Text>Up To 25% Returns</Text>
            </Div>
            <TitlePart>Access investment opportunities</TitlePart>
            <DetailsPart>
              Invest securely and confidently on the go. Grow your money
              confidently by investing in pre-vetted investment opportunities.
            </DetailsPart>
            <Sub>
              <Link>Learn more about Investments</Link>
              <Point />
            </Sub>
          </TextPart>
        </Main>
      </Container>
    </div>
  );
};

export default Invest;

const Container = styled.div`
  width: 100%;
  height: 150vh;
  color: #0c1825;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Cover = styled.div`
  width: 480px;
  height: 550px;
  object-fit: cover;
  margin-left: 50px;
`;

const Phone = styled.img`
  width: 100%;
  height: 100%;
`;

const TextPart = styled.div``;

const Div = styled.div`
  width: 220px;
  height: 40px;
  background-color: #f5eefd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  color: #9767e5;
  margin: 20px 0;
  font-weight: 700;
`;

const Text = styled.div``;

const TitlePart = styled.div`
  font-size: 51px;
  font-weight: 700;
`;

const DetailsPart = styled.div`
  width: 400px;
  margin: 20px 0;
`;

const Link = styled.div``;

const Point = styled(RiArrowDropRightLine)`
  font-size: 23px;
`;

const Sub = styled.div`
  display: flex;
  color: #9767e5;
  font-weight: 800;
  cursor: pointer;
`;
