
import styled from "styled-components";
import img1 from "../../../Assets/illustrations-spot-Agile.svg";
import img3 from "../../../Assets/icon-templates.svg";
import img4 from "../../../Assets/icon-workflow.svg";
import img2 from "../../../Assets/illustrations-spot-JIRA Board.svg";
import img5 from "../../../Assets/illustrations-spot-Bug.svg";
import img6 from "../../../Assets/devops-spot-logo.svg";
import img0 from "../../../Assets/quote.svg";
import img7 from "../../../Assets/workflow.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const NextIntro = () => {
  const data: any = [
    {
      normal: "Templates give you a head start",
      next: "Get started with ready-made templates.",
    },
    {
      normal: "Then customize as you grow",
      next: "Jira adapts to the way you work, not the other way around. Start simple, customize as you go. ",
    },
  ];

  const newData: any = [
    {
      values: "Scrum",
      hint: "Learn more",
      images: img1,
    },
    {
      values: "Kanban",
      hint: "Learn more",
      images: img2,
    },
    {
      values: "Bug Tracking",
      hint: "Learn more",
      images: img5,
    },
    {
      values: "DevOps",
      hint: "Learn more",
      images: img6,
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Head>Easier than ever</Head>
          <Holds>
            <Imgs2 src={img3} />
            <Line />
            <Imgs2 src={img4} />
          </Holds>
          <Hold>
            {data.map((props: any) => (
              <Div>
                {props.normal}
                <p>{props.next}</p>
              </Div>
            ))}
          </Hold>{" "}
          <Holdings>
            <BigLeft>
              {newData.map((el: any) => (
                <Shape>
                  <ImgHold>
                    <ImgA src={el.images} />
                  </ImgHold>
                  <Div1>
                    {el.values}
                    <p>
                      {el.hint}
                      <AiOutlineArrowRight style={{ marginLeft: "5px" }} />
                    </p>
                  </Div1>
                </Shape>
              ))}
              <Curver>
                <Imgs src={img0} />
                <Outlines>
                  You can decide how you are working as a team first and then
                  let the software work around you.”
                </Outlines>
                <Name>
                  <Sub style={{ fontSize: "17px", fontWeight: "700" }}>
                    JEANNICE ANGELA
                  </Sub>
                  <Sub>PRODUCT MANAGER, RENT THE RUNWAY</Sub>
                </Name>
              </Curver>
            </BigLeft>
            <BigRight>
              <ImgA1 src={img7} />
            </BigRight>
          </Holdings>
        </Main>
      </Container>
    </div>
  );
};

export default NextIntro;

const Container = styled.div`
  width: 100%;
  min-height: 200vh;
  display: flex;
  justify-content: center;
  background-size: 100% 100%;
  background-position: 0px 0px;
  background-image: linear-gradient(
    90deg,
    #0065ff00 0%,
    #0065ff00 50%,
    #efefef 50%
  );
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Div = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  width: 450px;
  color: #253858;

  p {
    font-size: 15px;
    font-weight: normal;
  }
`;

const ImgHold = styled.div`
  width: 120px;
  height: 100%;
  background-color: #eeebeb;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Main = styled.div`
  width: 87%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Head = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #253858;
  line-height: 2.5;
`;

const Imgs2 = styled.img``;

const Holds = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;
  align-items: center;
`;

const Hold = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 5px;
  background-size: 100% 100%;
  background-position: 0px 0px;
  background-image: linear-gradient(90deg, #0065ff 0%, #79f2c0 57%);
`;

const Shape = styled.div`
  width: 450px;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-top: 30px;
`;

const ImgA = styled.img`
  width: 50%;
  height: 50%;
`;

const Div1 = styled.div`
  margin-top: 15px;
  font-weight: 700;

  p {
    font-size: 14px;
    color: #1778ff;
    font-weight: normal;
    transition: all 350ms;

    :hover {
      text-decoration-line: underline;
      cursor: pointer;
      transform: translate(3px, 0);
    }
  }
`;

const Holdings = styled.div`
  width: 95%;
  min-height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BigLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  min-height: 300px;
  flex: 1;
`;

const BigRight = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  object-fit: cover;
  position: relative;
`;

const ImgA1 = styled.img`
  width: 600px;
  position: absolute;
  top: -120px;
  height: 600px;
  margin-left: 120px;
`;

const Imgs = styled.img`
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
`;
const Outlines = styled.div`
  color: #253858;
  width: 400px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
`;
const Sub = styled.div`
  color: #253858;
  font-size: 13px;
`;
const Curver = styled.div`
  width: 450px;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-size: 100% 100%;
  background-position: 0px 0px;
  background-image: linear-gradient(90deg, #a100ff00 0%, #4668ff83 100%);
  border-radius: 0 50% 50% 0;
  margin-top: 60px;
`;
