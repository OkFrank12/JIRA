import styled from "styled-components";
import imgA from "../../Assets/Jira Software_24.svg";
import Button from "../Static/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo src={imgA} />
          <NavHolder>
            <Nav>
              Features<p></p>
            </Nav>
            <Nav1>
              Product guide<p></p>
            </Nav1>
            <Nav2>
              Templates<p></p>
            </Nav2>
            <Nav3>
              Pricing<p></p>
            </Nav3>
            <Nav4>
              Enterprise<p></p>
            </Nav4>
          </NavHolder>
          <Link to="/sign-up" style={{textDecoration: "none"}}>
            <Button
              brad="5px"
              color="#1778ff"
              title="Get it free"
              bdr="1px solid #1778ff"
            />
          </Link>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #1778ff;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87%;
  height: 100%;
`;

const Logo = styled.img``;

const NavHolder = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Nav1 = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    p {
      width: 110px;
      height: 5px;
      border-radius: 5px;
      background-color: silver;
    }
    color: blue;
  }
`;

const Nav2 = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    p {
      width: 80px;
      height: 5px;
      border-radius: 5px;
      background-color: silver;
    }
    color: blue;
  }
`;

const Nav3 = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    p {
      width: 50px;
      height: 5px;
      border-radius: 5px;
      background-color: silver;
    }
    color: blue;
  }
`;

const Nav4 = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    p {
      width: 75px;
      height: 5px;
      border-radius: 5px;
      background-color: silver;
    }
    color: blue;
  }
`;

const Nav = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    p {
      width: 70px;
      height: 5px;
      border-radius: 5px;
      background-color: silver;
    }
    color: blue;
  }
`;
