
import Button from "../Components/Static/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import err from "../Assets/errorSide.jpg";
const Error = () => {
  return (
    <div>
      <Container>
        <Main>
          <AlmightyText>Oops!!!</AlmightyText>
          <Div>
            <Status>
              <div>404</div> -- Page Not Found
            </Status>
            <Details>
              The Page you are looking for might have been removed, had its name
              changed or is temporarily unavailable.
            </Details>
          </Div>
          <br />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button title="Go to Alaissan" bg="red" color="white" brad="10px" />
          </Link>
        </Main>
        <Img src={err} />
      </Container>
    </div>
  );
};

export default Error;
const Container = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 80%;
`;

const AlmightyText = styled.div`
  font-size: 100px;
  font-weight: 900;
  color: red;
`;

const Div = styled.div`
  width: 400px;
  height: 250px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Status = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;

  div {
    color: red;
    font-size: 25px;
    font-weight: 700;
    margin-right: 20px;
  }
`;

const Details = styled.div`
  text-align: center;
  width: 350px;
  color: grey;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
`;
