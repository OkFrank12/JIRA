import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../Components/Static/Button";
import InputProps from "../../Components/ReUSe/Input/InputProps";
import { GlobalContext } from "../../Global/GlobalProvider";
import { useState, useContext } from "react";
const ChangePassword = () => {
  const [errorState, setErrorState] = useState<string>("");

  const { actualConfirm, actualPassword, userState }: any =
    useContext(GlobalContext);
  return (
    <div>
      <Container>
        <Main>
          <Title>Create New Password</Title>
          <InputProps
            password
            password1="Password"
            passwordPlace="Enter your New Password"
            confirm
            confirm1="Confirm Password"
            confirmPlace="Please confirm New Password"
          />
          <ButtonHolder>
            <Space />
            {actualPassword === actualConfirm ? (
             <Link to="/sign-in" style={{ textDecoration: "none" }}>
                <Button
                  title="Request Reset"
                  color="white"
                  bg="#1c7ed6"
                  brad="30px"
                  fs="12px"
                />
              </Link>
            ) : (
              <Button
              title="Request Reset"
              color="white"
              bg="#1c7ed6"
              brad="30px"
              fs="12px"
              onClick={() => {
                setErrorState!("Wrong Credentials");
              }}
            />
            )}
          </ButtonHolder>
          {actualPassword === userState?.password &&
          actualConfirm === userState?.confirm ? null : (
            <div
              style={{
                fontSize: "12px",
                color: "red",
                fontWeight: "700",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {errorState}
            </div>
          )}
        </Main>
      </Container>
    </div>
  );
};

export default ChangePassword;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 390px;
  min-height: 180px;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// const Div2 = styled(Link)`
//   font-size: 12px;
//   flex: 1;
//   margin-right: 40px;
//   color: black;
//   text-decoration: none;
// `;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Space = styled.div``;
