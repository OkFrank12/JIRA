
import styled from "styled-components";
import logo from "../../../Assets/Assets/logo.svg";
import licence from "../../../Assets/Assets/license.png";
import social from "../../../Assets/Assets/socials.png";

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <Parent1>
            <LogoHold>
              <Logo src={logo} />
            </LogoHold>
            <LicenseHold>
              <Licence src={licence} />
            </LicenseHold>
          </Parent1>
          <Parent2>
            <BigNav>Products</BigNav>
            <NavHold>
              <Navs>Piggybank</Navs>
              <Navs>Invest</Navs>
              <Navs>Safelock</Navs>
              <Navs>Target Savings</Navs>
              <Navs>Flex Naira</Navs>
            </NavHold>
          </Parent2>
          <Parent3>
            <BigNav>Company</BigNav>
            <NavHold>
              <Navs>About</Navs>
              <Navs>FAQs</Navs>
              <Navs>Blog</Navs>
            </NavHold>
          </Parent3>
          <Parent3>
            <BigNav>Legals</BigNav>
            <NavHold>
              <Navs>Terms</Navs>
              <Navs>Privacy</Navs>
              <Navs>Security</Navs>
            </NavHold>
          </Parent3>
          <Parent4>
            <IconPart>
              <Img src={social} />
            </IconPart>
            <Address>
              Tesmot House, Abdulrahman Okene close, Victoria Island, Lagos,
              Nigeria.
            </Address>
            <Email>contact@piggyvest.com</Email>
            <Number>+234 700 933 933 933</Number>
          </Parent4>
          <CenterDiv>
            <Text>
              Piggyvest (formerly piggybank.ng) is the leading online savings &
              investing platform in Nigeria. For over 6 years, our customers
              have saved and invested billions of Naira that they would normally
              be tempted to spend.
            </Text>
            <Text1>2016 - 2022 PiggyTech Global Limited - RC 1405222</Text1>
          </CenterDiv>
        </Main>
      </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 85%;
  flex-wrap: wrap;
`;

const Parent1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoHold = styled.div``;

const Logo = styled.img`
  cursor: pointer;
`;

const LicenseHold = styled.div`
  border-radius: 10px;
  border: 1px solid lightgray;
  width: 130px;
  height: 90px;
  object-fit: cover;
  margin: 20px 0;
  padding: 10px;
`;

const Licence = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Parent2 = styled.div`
  width: 120px;
  height: 170px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 14px;
`;

const BigNav = styled.div`
  font-weight: 700;
  cursor: pointer;
`;

const Navs = styled.div`
  margin: 8px 0;
  transition: all 300ms;
  cursor: pointer;
  :hover {
    color: #0d60d8;
  }
`;

const NavHold = styled.div``;

const Parent3 = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 14px;
`;

const Parent4 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: right;
  cursor: pointer;
`;

const IconPart = styled.div`
  cursor: pointer;
  transition: all 300ms;
  :hover{
    transform: scale(1.1);
  }`;

const Img = styled.img``;

const Address = styled.div`
  width: 250px;
  margin: 10px 0;
`;

const Email = styled.div`
  margin: 10px 0;
`;

const Number = styled.div`
  margin: 10px 0;
`;

const CenterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  flex-direction: column;
`;

const Text = styled.div`
  width: 60%;
  line-height: 1.5;
`;

const Text1 = styled.div`
  color: #0d60d8;
  margin-top: 40px;
  cursor: pointer;
  transition: all 300ms;

  :hover{
    color: #000;
  }
`;
