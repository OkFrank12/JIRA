import img1 from "../../Assets/alaissan.jpg";
import { Link } from "react-router-dom"
import styled from "styled-components";
import {
  AiOutlineCopyright,
  AiOutlineGlobal,
} from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Img0 from "../../Assets/medias.jpg";

const Footer = () => {
  const data: any = [
    {
      t: "PRODUCTS",
      c1: "Jira Software",
      c2: "Jira Align",
      c3: "Jira Service Management",
      c4: "Jira Products Discovery",
      c5: "Confluence",
      c6: "Trello",
      c7: "Bitbucket",
      more: "View all products",
    },
    {
      t: "RESOURCES",
      c1: "Technical Support ",
      c2: "Purchasing & licencing",
      c3: "Atlaissian Community",
      c4: "Knowledge base",
      c5: "Marketplace",
      c6: "My Account",
      more: "Create support tickets",
    },
    {
      t: "EXPAND & LEARN",
      c1: "Partners ",
      c2: "Training & Certification",
      c3: "Documentation",
      c4: "Developer Resources",
      c5: "Enterprise Services",
      more: "View all resources",
    },
    {
      t: "ABOUT ATLAISSIAN",
      c1: "Company ",
      c2: "CareerS",
      c3: "EventS",
      c4: "Blogs",
      c5: "Atlaissian Foundation",
      c6: "Investor Relations",
      c7: "Trust & Security",
      more: "Contact us",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Holder>
            <Logo src={img1} />
            {data.map((el: any) => (
              <Divs>
                <Title>{el.t}</Title>
                <br />
                <Contents>{el.c1}</Contents>
                <Contents>{el.c2}</Contents>
                <Contents>{el.c3}</Contents>
                <Contents>{el.c4}</Contents>
                <Contents>{el.c5}</Contents>
                <Contents>{el.c6}</Contents>
                <Contents>{el.c7}</Contents>

                <Option>{el.more}</Option>
              </Divs>
            ))}
          </Holder>
        </Main>
        <Hr />
        <Main2>
          <HOldings>
            <Div1>
            <AiOutlineGlobal />
            <Text>English</Text>
            <MdOutlineArrowDropDown />
          </Div1>
          <Text>Privacy policy</Text>
          <Text>Terms</Text>
          <Text>Impressum</Text>
          <Text>
            Copyright <AiOutlineCopyright /> 2023 Atlaissian
          </Text>
          </HOldings>
          
          <Imgs src={Img0}/>
          <Link to="/sign-up">Register</Link>
        </Main2>
      </Container>
    </div>
  );
};

export default Footer;

const HOldings = styled.div`display: flex; align-items: center; justify-content: center;`;

const Option = styled.div`
  margin-top: 30px;
  font-size: 13px;
  font-weight: 500;
  color: blue;

  :hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`;

const Imgs = styled.img``;

const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f7;
  flex-direction: column;
`;

const Main2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  height: 9%;
  color: #444444;
  font-size: 14px;
`;

const Div1 = styled.div`
  display: flex;
  margin: 0 20px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  margin: 0 8px;
  font-size: 14px;

  :hover {
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

const Main = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 150px;
  height: 30px;
`;

const Divs = styled.div``;

const Hr = styled.div`
  height: 1px;
  background-color: grey;
  width: 100%;
`;

const Title = styled.div`
  font-weight: 700;
  opacity: 0.6;
`;

const Contents = styled.div`
  font-size: 12px;
  line-height: 2;
  cursor: pointer;

  :hover {
    text-decoration-line: underline;
  }
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
`;
