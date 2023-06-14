import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Global/GlobalProvider";
import Button from "../../Components/Static/Button";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
    // const navigate = useNavigate()
  const { userState, setUserState }: any = useContext(GlobalContext);
  return (
    <div>
      <Container>
        <Main>
          <div>
            Welcome back <strong>{userState?.name}</strong>
          </div>
          <br />
          <Link to="/" style={{textDecoration: "none"}}>
            <Button
              title="Logout"
              brad="30px"
              color="dodgerblue"
              onClick={() => {
                setUserState(null);
                
              }}
            />
          </Link>
        </Main>
      </Container>
    </div>
  );
};

export default HomeScreen;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
