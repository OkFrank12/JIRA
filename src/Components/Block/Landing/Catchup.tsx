import imgs from "../../../Assets/Team23_Official_white_Large.svg";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const Catchup = () => {
  return (
    <div>
      <Container>
        <Main>
          <LeftSide>
            <Img src={imgs} />
          </LeftSide>
          <MiddleSide>
            Catch up on what you missed at Team '23! Power up your Jira Software
            skills with our on-demand sessions.
          </MiddleSide>
          <RightSide>
            Watch Now
            <div>
              <AiOutlineArrowRight style={{ rotate: "calc(-40deg)" }} />
            </div>
          </RightSide>
        </Main>
      </Container>
    </div>
  );
};

export default Catchup;

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #deebff;
`;

const Main = styled.div`
  min-width: 50%;
  height: 40%;
  background-color: #222768;
  border: 2px solid #fc35d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  top: -60px;
  position: absolute;
`;

const LeftSide = styled.div``;

const MiddleSide = styled.div`
  color: white;

  font-size: 15px;
  font-weight: 400;
  margin: 0 50px;
  width: 400px;
`;

const RightSide = styled.div`
  color: #fda4ea;
  font-weight: 700;
  display: flex;
  opacity: 0.9;
  cursor: pointer;

  :hover {
    div {
      transform: translate(3px, 0);
    }
  }
`;

const Img = styled.img`
  width: 170px;
  height: 200px;
`;
