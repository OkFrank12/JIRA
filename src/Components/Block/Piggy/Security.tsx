
import styled from "styled-components";
import security from "../../../Assets/Assets/security.png";
import { RiArrowDropRightLine } from "react-icons/ri";

const Security = () => {
  return (
    <div>
      <Container>
        <Main>
          <Div>
            <Img src={security} />
          </Div>
          <RightHolder>
            <Bolds>Your security is our priority</Bolds>
            <Light>
              PiggyVest uses the highest level of Internet Security and it is
              secured by 256 bits SSL security encryption to ensure that your
              information is comepletely protected from fraud.
            </Light>
            <Hold>
              <Linker>Learn more</Linker>
              <Point />
            </Hold>
          </RightHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Security;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0c1825;
`;

const Main = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const RightHolder = styled.div``;

const Bolds = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 2;
`;

const Light = styled.div`
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Linker = styled.div``;

const Div = styled.div`
  object-fit: cover;
  width: 200px;
  height: 130px;
  margin-right: 50px;
`;

const Hold = styled.div`
  display: flex;
  font-weight: 500;
  color: #0d60d8;
  font-size: 15px;
  cursor: pointer;
`;

const Point = styled(RiArrowDropRightLine)`
  font-size: 23px;
`;
