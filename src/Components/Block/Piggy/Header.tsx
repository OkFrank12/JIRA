
import styled from "styled-components";

import logo from "../../../Assets/Assets/logo.svg";
import ShortButton from "./ShortButton";
import LongButton from "./LongButton";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <LogoHold>
            <Logo src={logo} />
          </LogoHold>
          <NavHolder>
            <Navs>Save</Navs>
            <Navs>Invest</Navs>
            <Navs>Stories</Navs>
            <Navs>FAQs</Navs>
            <Navs>Resources</Navs>
          </NavHolder>
          <CallToAction>
            <ShortButton />
            <LongButton />
          </CallToAction>
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
  font-size: 18px;
  font-weight: 600;
  color: #0c1825;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoHold = styled.div``;

const Logo = styled.img`
cursor: pointer;`;

const NavHolder = styled.div`
  display: flex;
  margin-right: 140px;
`;

const Navs = styled.div`
  margin: 0 20px;
  cursor: pointer;
`;

const CallToAction = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 370px;
  height: 100%;
  background-color: whitesmoke;
`;
