import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";
import Button from "../../Components/Static/Button";
import InputProps from "../../Components/ReUSe/Input/InputProps";
import { GlobalContext } from "../../Global/GlobalProvider";
import { useContext, useState } from "react";

const SignIn = () => {
  const [errorState, setErrorState] = useState<string>("");
  const { actualEmail, actualPassword, userState }: any =
    useContext(GlobalContext);

  console.log(userState?.password);
  return (
    <div>
      <Container>
        <Link to="/sign-up" style={{ fontSize: "13px",color: "dodgerblue", textDecoration: "none" }}>
          Go Back to Sign up
        </Link>
        <Main>
          <Title>Sign In</Title>
          <ButtonHolder>
            <Button title="Google" icon={<FcGoogle />} brad="30px" fs="12px" />
            <Button
              title="Twitter"
              icon={<AiOutlineTwitter />}
              brad="30px"
              fs="12px"
            />
          </ButtonHolder>
          <Display>
            <Inline />
            <Div>Or continue with email</Div>
            <Inline />
          </Display>
          <InputProps
            email1="Email"
            email
            emailPlace="Enter your Email Address"
            password1="Password"
            password
            passwordPlace="Enter your Password"
          />
          <Div2 to="/forgot-password">Forgot Password</Div2>
          <ButtonHolder>
            <Div2 to="/sign-up">Don't have an account? Sign up</Div2>
            <Space />

            {actualEmail === userState?.email &&
            actualPassword === userState?.password ? (
              <Link to="/piggy" style={{ textDecoration: "none" }}>
                <Button
                  title="Sign In"
                  color="white"
                  bg="#1c7ed6"
                  brad="30px"
                  fs="12px"
                />
              </Link>
            ) : (
              <Button
                title="Sign In"
                color="white"
                bg="#1c7ed6"
                onClick={() => {
                  setErrorState("Wrong Credentials");
                }}
                brad="30px"
                fs="12px"
              />
            )}
          </ButtonHolder>
          {actualEmail === userState?.email &&
          actualPassword === userState?.password ? null : (
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

export default SignIn;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
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
  min-height: 250px;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 1px;
  width: 100%;
`;

const Inline = styled.div`
  height: 1px;
  background-color: silver;
  width: 110px;
  margin: 0 5px;
`;

const Div = styled.div`
  font-size: 12px;
`;

const Div2 = styled(Link)`
  font-size: 12px;
  flex: 1;
  margin-right: 40px;
  color: black;
  text-decoration: none;
`;

const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Space = styled.div``;
