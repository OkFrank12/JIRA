import styled from "styled-components";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";
import Button from "../../Components/Static/Button";
import InputProps from "../../Components/ReUSe/Input/InputProps";
import { GlobalContext } from "../../Global/GlobalProvider";
import { useContext } from "react";
import Header from "../../Components/Block/Header";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [errorState, setErrorState] = useState<string>("");
  const {
    actualConfirm,
    actualEmail,
    actualName,
    actualPassword,
    setUserState,
    userState,
  }: any = useContext(GlobalContext);

  return (
    <div>
      <Header />
      <Container>
        <Link to="/" style={{ color: "dodgerblue", textDecoration: "none" }}>
          Go Back to Atlaissian
        </Link>
        <Main>
          <Title>Sign Up</Title>
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
            name1="Name"
            name
            namePlace="Enter your Name"
            email1="Email"
            email
            emailPlace="Enter your Email Address"
            password1="Password"
            password
            passwordPlace="Enter your Password"
            confirm1="Confirm Password"
            confirm
            confirmPlace="Please Confirm your Password"
          />

          <ButtonHolder>
            <Div2 to="/sign-in">You have an account? Sign in</Div2>
            <Space />
            {actualName === "" ||
            actualEmail === "" ||
            actualPassword === "" || actualConfirm === "" ? (
              <Button
                brad="30px"
                fs="12px"
                title="Sign Up"
                color="white"
                bg="#1c7ed6"
                onClick={() => {
                  setErrorState!("Wrong Credentials");
                }}
              />
            ) : (
              <Link to="/sign-in" style={{ textDecoration: "none" }}>
                <Button
                  brad="30px"
                  fs="12px"
                  title="Sign Up"
                  color="white"
                  bg="#1c7ed6"
                  onClick={() => {
                    console.log("Name: ", actualName);
                    console.log("Email: ", actualEmail);
                    console.log("Password: ", actualPassword);
                    console.log("Confirm Password: ", actualConfirm);
                    setUserState!({
                      name: actualName,
                      email: actualEmail,
                      password: actualPassword,
                    });
                  }}
                />
              </Link>
            )}
          </ButtonHolder>
          {actualName === userState?.name &&
          actualEmail === userState?.email &&
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

export default SignUp;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 87vh;
  font-size: 12px;
`;

const Main = styled.div`
  padding: 15px 15px;
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
  margin: 15px 7px;
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
