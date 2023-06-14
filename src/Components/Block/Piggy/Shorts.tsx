
import styled from "styled-components";
import tech from "../../../Assets/Assets/tech1.png";
import guard from "../../../Assets/Assets/guardian.png";
import crucnh from "../../../Assets/Assets/crunch.png";

const Shorts = () => {
  return (
    <div>
      <Container>
        <Main>
          <Div>
            <BigText>As featured in</BigText>
            <Logos>
              <Logo1>
                <Img src={tech} />
              </Logo1>
              <Logo1>
                <Img src={guard} />
              </Logo1>
              <Logo1>
                <Img src={crucnh} />
              </Logo1>
            </Logos>
          </Div>
        </Main>
      </Container>
    </div>
  );
};

export default Shorts;

const Container = styled.div`
  width: 100%;
  height: 300px;
  color: #0c1825;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BigText = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Logos = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-between;
`;

const Logo1 = styled.div`
  width: 150px;
  height: 30px;
  object-fit: cover;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 100%;
`;
