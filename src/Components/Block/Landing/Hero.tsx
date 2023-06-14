import Button from "../../Static/Button";
import styled from "styled-components";
import heroImg from "../../../Assets/atl.jpg";

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <LeftHolder>
            <Title>Move fast, stay aligned, and build better - together</Title>
            <Context>
              The #1 software development tool used by agile teams Get it free
            </Context>
            <Br />
            <Div>
              <Button brad="3px" color="white" title="Get it free" bg="blue" />
            </Div>
          </LeftHolder>
          <RightHolder>
            <Img src={heroImg} />
          </RightHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  background-position: 0px 0px;
  background-image: linear-gradient(
    37deg,
    #a100ff00 25%,
    #a8cbfbff 36%,
    #94ceffff 38%,
    #82caffff 45%,
    #a9dbffff 62%,
    #a100ff00 81%
  );
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 87%;
  height: 100%;
`;

const LeftHolder = styled.div``;

const Title = styled.div`
  font-size: 44px;
  font-weight: 500;
  color: #253858;
  width: 600px;
`;

const Context = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #253858;
`;

const RightHolder = styled.div``;

const Br = styled.div`
  margin: 50px;
`;

const Img = styled.img`
  width: 660px;
  height: 430px;
`;

const Div = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
`;
